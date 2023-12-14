import {
  CarContainer,
  Control,
  Description,
  DivPrice,
  DivTags,
  ImgCoffee,
  Order,
  Title,
} from './styles'

import { Check, ShoppingCart } from 'phosphor-react'

import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import { useCart } from '../../hooks/useCart'
import { QuantityInput } from '../Form/QuantityInput'
type Props = {
  coffee: {
    id: string
    name: string
    description: string
    tags: string[]
    price: number
    img: string
  }
}
export function Card({ coffee }: Props) {
  const [quantity, setQuantity] = useState(1)
  const [isItemAdded, setIsItemAdded] = useState(false)
  const theme = useTheme()
  // console.log(ImgCoffee)
  const { addItem } = useCart()

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }
  function handleAddItem() {
    addItem({ id: coffee.id, quantity })
    setIsItemAdded(true)
    setQuantity(1)
  }
  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }
  useEffect(() => {
    let timeout: number

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false)
      }, 1000)
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [isItemAdded])
  return (
    <CarContainer>
      <ImgCoffee src={coffee.img} alt={coffee.name} />

      <DivTags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </DivTags>

      <Title>{coffee.name}</Title>
      <Description>{coffee.description}</Description>
      <Control>
        <DivPrice>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </DivPrice>

        <Order $itemAdded={isItemAdded}>
          <QuantityInput
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
          <button disabled={isItemAdded} onClick={handleAddItem}>
            {isItemAdded ? (
              <Check size={22} weight="fill" color={theme['base-card']} />
            ) : (
              <ShoppingCart size={22} color={theme['base-card']} />
            )}
          </button>
        </Order>
      </Control>
    </CarContainer>
  )
}
