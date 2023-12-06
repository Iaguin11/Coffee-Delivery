import { Header } from '../../components/Header'
import { useTheme } from 'styled-components'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { ContainerHome, Heading, HomeContent, Info } from './styles'
import ImgHome from '../../assets/Img-coffee.png'

export function Home() {
  const theme = useTheme()
  return (
    <div>
      <Header />
      <ContainerHome>
        <HomeContent>
          <div>
            <Heading>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>

              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </Heading>

            <Info>
              <div>
                <ShoppingCart
                  size={32}
                  weight="fill"
                  color={theme['background-']}
                  style={{ backgroundColor: theme['yellow-dark'] }}
                />
                <span>Compra simples e segura</span>
              </div>

              <div>
                <Package
                  size={32}
                  weight="fill"
                  color={theme['background-']}
                  style={{ backgroundColor: theme['base-text'] }}
                />
                <span>Embalagem mantém o café intacto</span>
              </div>

              <div>
                <Timer
                  size={32}
                  weight="fill"
                  color={theme['background-']}
                  style={{ backgroundColor: theme['yellow-2c'] }}
                />
                <span>Entrega rápida e rastreada</span>
              </div>

              <div>
                <Coffee
                  size={32}
                  weight="fill"
                  color={theme['background-']}
                  style={{ backgroundColor: theme['purple-80'] }}
                />
                <span>O café chega fresquinho até você</span>
              </div>
            </Info>
          </div>
          <img src={ImgHome} alt="" />
        </HomeContent>
      </ContainerHome>
    </div>
  )
}
