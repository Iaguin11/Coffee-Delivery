import styled from 'styled-components'

export const CarContainer = styled.div`
  width: 256px;
  height: 310px;
  border-radius: 6px 36px;
  background: ${(props) => props.theme['base-card']};

  > div {
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > h5 {
      color: ${(props) => props.theme['yellow-dark']};
      font-family: 'Roboto';
      font-size: 0.625rem;
      font-weight: 700;
      line-height: 130%;
      text-transform: uppercase;
    }
    p {
      width: 216px;
      text-align: center;
      font-family: 'Roboto';
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 130%;

      color: ${(props) => props.theme['base-label']};
    }
  }
`
export const DivImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const DivButton = styled.span`
  display: flex;
  width: 200px;
  justify-content: space-between;
  align-items: center;
`
