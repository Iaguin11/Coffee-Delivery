import { useTheme } from 'styled-components'
import { Container, Heading, InfoContent, Order } from './styles'
import { CurrencyDollar, Info, MapPin, Timer } from 'phosphor-react'
import { useParams } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import deliverySvg from '../../../public/coffees/delivery.svg'

export function Success() {
  const theme = useTheme()
  const { orders } = useCart()
  const { orderId } = useParams()
  const orderInfo = orders.find((order) => order.id === Number(orderId))
  const paymentMethod = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    cash: 'Dinheiro',
  }
  if (!orderInfo?.id) {
    return null
  }
  return (
    <Container>
      <Order>
        <Heading>
          <h2>Uhu! Pedido confirmado</h2>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </Heading>

        <Info>
          <InfoContent>
            <div>
              <MapPin
                color={theme['yellow-dark']}
                style={{ backgroundColor: theme['purple-80'] }}
                size={32}
              />

              <div>
                <span>
                  Entrega em
                  <strong>
                    {orderInfo.street}, {orderInfo.number}
                  </strong>
                </span>

                <span>
                  {orderInfo.neighborhood} - {orderInfo.city},{orderInfo.state}
                </span>
              </div>
            </div>

            <div>
              <Timer
                color={theme['white-fff']}
                style={{ backgroundColor: theme['yellow-2c'] }}
                size={32}
              />

              <div>
                <span>Previsão de entrega</span>

                <strong>20 min - 30 min</strong>
              </div>
            </div>

            <div>
              <CurrencyDollar
                color="#ffff"
                style={{ backgroundColor: theme['yellow-dark'] }}
                size={32}
              />

              <div>
                <span>Pagamento na entrega</span>

                <strong>{paymentMethod[orderInfo.paymentMethod]}</strong>
              </div>
            </div>
          </InfoContent>
        </Info>
      </Order>

      <img src={deliverySvg} alt="Pedido concluído" />
    </Container>
  )
}
