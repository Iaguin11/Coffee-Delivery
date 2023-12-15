import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  max-width: 1160px;
  margin: 0 auto;
  padding: 80px 20px;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;

  img {
    margin-bottom: -13px;
  }
`

export const Order = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    line-height: 130%;
    font-weight: 800;
    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    line-height: 130%;
    font-weight: 800;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Info = styled.div`
  border: 1px solid;
  border-radius: 6px 36px;
  width: 100%;

  border-color: transparent;
  background-origin: border-box;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme['yellow-2c']}, ${theme['purple-80']})`};
`

export const InfoContent = styled.div`
  padding: 40px;
  background-color: white;
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    > svg {
      padding: 8px;
      border-radius: 999px;
    }
  }

  > div div {
    display: flex;
    flex-direction: column;
  }
`
