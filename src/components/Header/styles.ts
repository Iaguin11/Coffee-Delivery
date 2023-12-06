import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background: ${(props) => props.theme['background-']};
  display: flex;
  padding: 32px 160px;
  justify-content: space-between;
  align-items: center;
`
export const Aside = styled.aside`
  display: flex;
  align-items: center;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    gap: 4px;

    background-color: ${(props) => props.theme['purple-light']};

    svg {
      color: ${(props) => props.theme['purple-dark']};
    }
    span {
      color: ${(props) => props.theme['purple-dark']};
    }
    padding: 10px 8px;
    border-radius: 8px;

    a {
      /* display: flex;
      align-items: center;
      justify-content: center; */

      background-color: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};

      padding: 8px;
      border-radius: 6px;

      position: relative;
    }
  }
`
