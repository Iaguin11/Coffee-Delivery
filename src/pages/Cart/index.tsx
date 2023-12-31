import { Fragment } from 'react'
import {
  AddressContainer,
  AddressForm,
  AddressHeading,
  CardOne,
  CartContainer,
  PaymentContainer,
  PaymentErrorMessage,
  PaymentHeading,
  PaymentOptions,
  Coffee,
  CoffeeInfo,
  CartTotalInfo,
  CheckoutButton,
  CartTotal,
} from './styles'
import { SubmitHandler, useForm } from 'react-hook-form'
import { coffees } from '../../../data.json'
import { z } from 'zod'

import { useCart } from '../../hooks/useCart'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
  Trash,
} from 'phosphor-react'
import { TextInput } from '../../components/Form/TextInput'
import { Radio } from '../../components/Form/Radio'

import { QuantityInput } from '../../components/Form/QuantityInput'
import { zodResolver } from '@hookform/resolvers/zod'

type FormInputs = {
  cep: number
  street: string
  number: string
  fullAddress: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}
const newOrder = z.object({
  cep: z.number({ invalid_type_error: 'Informe o CEP' }),
  street: z.string().min(1, 'Informe a rua'),
  number: z.string().min(1, 'Informe o número'),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe a UF'),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})
const shippingPrice = 3.5

export type OrderInfo = z.infer<typeof newOrder>

export function Cart() {
  const {
    cart,
    checkout,
    incrementItemQuantity,
    decrementItemQuantity,
    removeItem,
  } = useCart()
  interface CartItem {
    id: string
    quantity: number
  }

  const coffeesInCart = (cart || []).map((item: CartItem) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id)

    if (!coffeeInfo) {
      throw new Error('Invalid coffee')
    }
    return {
      ...coffeeInfo,
      quantity: item.quantity,
    }
  })

  const totalItemPrice = coffeesInCart.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity)
  }, 0)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(newOrder),
  })
  const selectedPaymentMethod = watch('paymentMethod')

  function handleItemIncrement(itemId: string) {
    incrementItemQuantity(itemId)
  }
  function handleItemDecrement(itemId: string) {
    decrementItemQuantity(itemId)
  }
  function handleItemRemove(itemId: string) {
    removeItem(itemId)
  }
  const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
    if (cart.length === 0) {
      return alert('É preciso ter pelo menos um item no carrinho')
    }
    checkout(data)
  }
  return (
    <CartContainer>
      <CardOne>
        <h2>Complete seu pedido</h2>

        <form id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
          <AddressContainer>
            <AddressHeading>
              <MapPin size={22} />

              <div>
                <span>Endereço de entrega</span>
                <p>Informer o endereço onde deseja receber o seu pedido</p>
              </div>
            </AddressHeading>
            <AddressForm>
              <TextInput
                placeholder="CEP"
                type="number"
                containerProps={{ style: { gridArea: 'cep' } }}
                error={errors.cep}
                {...register('cep', { valueAsNumber: true })}
              />
              <TextInput
                placeholder="Rua"
                containerProps={{ style: { gridArea: 'street' } }}
                error={errors.street}
                {...register('street')}
              />
              <TextInput
                placeholder="Número"
                containerProps={{ style: { gridArea: 'number' } }}
                error={errors.number}
                {...register('number')}
              />
              <TextInput
                placeholder="Complemento"
                optional
                containerProps={{ style: { gridArea: 'fullAddress' } }}
                error={errors.fullAddress}
                {...register('fullAddress')}
              />
              <TextInput
                placeholder="Bairro"
                containerProps={{ style: { gridArea: 'neighborhood' } }}
                error={errors.neighborhood}
                {...register('neighborhood')}
              />
              <TextInput
                placeholder="Cidade"
                containerProps={{ style: { gridArea: 'city' } }}
                error={errors.city}
                {...register('city')}
              />
              <TextInput
                placeholder="UF"
                maxLength={2}
                containerProps={{ style: { gridArea: 'state' } }}
                error={errors.state}
                {...register('state')}
              />
            </AddressForm>
          </AddressContainer>

          <PaymentContainer>
            <PaymentHeading>
              <CurrencyDollar size={22} />

              <div>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </PaymentHeading>

            <PaymentOptions>
              <div>
                <Radio
                  isSelected={selectedPaymentMethod === 'credit'}
                  {...register('paymentMethod')}
                  value="credit"
                >
                  <CreditCard size={16} />
                  <span>Cartão de crédito</span>
                </Radio>

                <Radio
                  isSelected={selectedPaymentMethod === 'debit'}
                  {...register('paymentMethod')}
                  value="debit"
                >
                  <Bank size={16} />
                  <span>Cartão de débito</span>
                </Radio>

                <Radio
                  isSelected={selectedPaymentMethod === 'cash'}
                  {...register('paymentMethod')}
                  value="cash"
                >
                  <Money size={16} />
                  <span>Dinheiro</span>
                </Radio>
              </div>

              {errors.paymentMethod ? (
                <PaymentErrorMessage>
                  {errors.paymentMethod.message}
                </PaymentErrorMessage>
              ) : null}
            </PaymentOptions>
          </PaymentContainer>
        </form>
      </CardOne>

      <CardOne>
        <h2>Cafés selecionados</h2>

        <CartTotal>
          {coffeesInCart.map((coffee) => (
            <Fragment key={coffee.id}>
              <Coffee>
                <div>
                  <img src={coffee.img} alt="coffee selected" />

                  <div>
                    <span>{coffee.name}</span>

                    <CoffeeInfo>
                      <QuantityInput
                        quantity={coffee.quantity}
                        incrementQuantity={() => handleItemIncrement(coffee.id)}
                        decrementQuantity={() => handleItemDecrement(coffee.id)}
                      />
                      <button onClick={() => handleItemRemove(coffee.id)}>
                        <Trash />
                        <span>Remover</span>
                      </button>
                    </CoffeeInfo>
                  </div>
                </div>
                <aside>R$ {coffee.price?.toFixed(2)}</aside>
              </Coffee>
              <span />
            </Fragment>
          ))}
          <CartTotalInfo>
            <div>
              <span>Total de itens</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalItemPrice)}
              </span>
            </div>

            <div>
              <span>Entrega</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(shippingPrice)}
              </span>
            </div>

            <div>
              <span>Total</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalItemPrice + shippingPrice)}
              </span>
            </div>
          </CartTotalInfo>
          <CheckoutButton type="submit" form="order">
            Confirma pedido
          </CheckoutButton>
        </CartTotal>
      </CardOne>
    </CartContainer>
  )
}
