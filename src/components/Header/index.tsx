import { Aside, HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import logoCoffee from '../../assets/LogoCoffee/logoCoffe.svg'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logoCoffee} alt="logoCoffee" />
      </Link>

      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Nova Friburgo, RJ</span>
        </div>

        <Link to={`cart`}>
          <ShoppingCart size={22} weight="fill" />
        </Link>
      </Aside>
    </HeaderContainer>
  )
}
