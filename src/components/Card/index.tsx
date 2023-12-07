import { CarContainer, DivButton, DivImg } from './styles'
import img from '../../assets/coffees/americano.png'
import { ShoppingCart } from 'phosphor-react'

export function Card() {
  return (
    <CarContainer>
      <DivImg>
        <img src={img} alt="" />
      </DivImg>

      <div>
        <h5>Tradicional</h5>
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
        <DivButton>
          <span>R$9,90</span>
          <span>+ 1 -</span>
          <ShoppingCart />
        </DivButton>
      </div>
    </CarContainer>
  )
}
