import { Aside, HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import logoCoffee from '../../assets/LogoCoffee/logoCoffe.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffee} alt="logoCoffee" />

      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Nova Friburgo, RJ</span>
        </div>
        <a href="/">
          <ShoppingCart size={22} weight="fill" />
        </a>
      </Aside>
    </HeaderContainer>
  )
}
