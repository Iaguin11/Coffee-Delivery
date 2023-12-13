import styled from 'styled-components'
import { ShoppingCart as ShoppingCartIcon } from 'phosphor-react'

export const ContainerHome = styled.section`
  position: relative;

  img#hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 544px;
    width: 100vw;
    object-fit: cover;
  }
`
export const HomeContent = styled.div`
  max-width: 1160px;
  padding: 92px 20px;
  margin: 0 auto;

  display: flex;
  gap: 56px;
  align-items: flex-start;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 66px;
  }
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 600px;
  h1 {
    color: ${(props) => props.theme['base-title']};
    font-family: 'Baloo 2';
    font-size: 3rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
  }
  span {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Roboto';
    font-size: 20px;
    font-weight: 400;
    line-height: 130%;
  }
`

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 28px;
  /* width: 567px; */

  div {
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      padding: 8px;
      border-radius: 999px;
    }

    span {
      color: ${(props) => props.theme['base-text']};
      font-family: 'Roboto';
      font-size: 1rem;
      font-weight: 400;
      line-height: 130%;
    }
  }
`
export const StyledShoppingCart = styled(ShoppingCartIcon)`
  font-weight: fill;
  color: ${(props) => props.theme['background-']};
  background-color: ${(props) => props.theme['yellow-dark']};
`
export const CoffeeList = styled.section`
  height: 177.45vh;
  max-width: 1440px;
  padding: 32px 225px 157px 160px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 54px;

  > h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
  }
`
