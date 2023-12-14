import styled from 'styled-components'

export const CartContainer = styled.section`
  display: flex;
  gap: 32px;
  max-width: 1160px;
  padding: 92px 20px;
  margin: 0 auto;
`
export const CardOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    line-height: 130%;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
  }
  > form {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`
export const FormsContainer = styled.div`
  padding: 40px;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};
  width: 100%;
  min-width: 640px;

  display: flex;
  flex-direction: column;
  gap: 32px;
`
export const AddressContainer = styled(FormsContainer)``

export const Heading = styled.div`
  display: flex;
  gap: 8px;

  div {
    span {
      color: ${(props) => props.theme['base-subtitle']};
    }
    p {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.25rem;
      line-height: 130%;
      font-weight: 700;
    }
  }
`
export const AddressHeading = styled(Heading)`
  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`
export const AddressForm = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;
`
export const PaymentContainer = styled(FormsContainer)``

export const PaymentHeading = styled(Heading)`
  svg {
    color: ${(props) => props.theme['purple-80']};
  }
`
export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
`
export const PaymentErrorMessage = styled.p`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.125rem;
  line-height: 130%;
  font-weight: 700;
  font-weight: 400;
  color: red;
`
export const CartTotal = styled.div`
  padding: 40px;
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme['base-card']};
  width: 100%;
  min-width: 448px;

  > span {
    display: block;
    height: 1px;
    background-color: ${(props) => props.theme['base-button']};
    margin: 24px 0;
  }
`
export const Coffee = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    > img {
      width: 64px;
      height: 64px;
    }
    display: flex;
    align-items: stretch;
    gap: 20px;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  > aside {
    font-weight: bold;
  }
`
export const CoffeeInfo = styled.div`
  display: flex;
  gap: 8px;

  > button {
    padding: 6px 8px;
    background-color: ${(props) => props.theme['base-button']};
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 8xp;
    transition: all 0.2s;

    &:hover {
      background-color: ${(props) => props.theme['base-text']};
    }
    > svg {
      color: ${(props) => props.theme['purple-80']};
    }
    > span {
      font-family: 'Roboto', sans-serif;
      font-size: 0.75rem;
      line-height: 160%;
      font-weight: 400;
      text-transform: uppercase;
      color: ${(props) => props.theme['base-text']};
    }
  }
`
export const CartTotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:first-child {
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      line-height: 130%;
      font-weight: 400;
    }
    span:last-child {
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      line-height: 130%;
      font-weight: 400;
    }
    div:last-child {
      span {
        font-family: 'Roboto', sans-serif;
        font-size: 1.25rem;
        line-height: 130%;
        font-weight: 400;
        font-weight: bold;
      }
    }
  }
`

export const CheckoutButton = styled.button`
  margin-top: 24px;
  width: 100%;
  padding: 12px;
  text-transform: uppercase;

  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  line-height: 160%;
  font-weight: 700;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['yellow-2c']};

  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
  border-radius: 6px;
`
