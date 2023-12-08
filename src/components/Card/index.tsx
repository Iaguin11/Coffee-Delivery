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

import { ShoppingCart } from 'phosphor-react'
// import { ShoppingCart } from 'phosphor-react'
// import { useState } from 'react'
import { useTheme } from 'styled-components'
// import { useCart } from '../../hooks/useCart'
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
  // const [quantity, setQuantity] = useState(1)
  // const [isItemAdded, setIsItemAdded] = useState(false)
  const theme = useTheme()
  // console.log(ImgCoffee)
  // const { addItem } = useCart()
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
          <span>{coffee.price}</span>
        </DivPrice>

        <Order>
          <button>
            <ShoppingCart size={22} color={theme['base-card']} />
          </button>
        </Order>
      </Control>
    </CarContainer>
  )
}
