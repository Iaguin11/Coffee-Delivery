import styled from 'styled-components'

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
export const Container = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 6px;

  background-color: ${(props) => props.theme['base-input']};
  transition: all 0.2s;

  &[data-state='focused'] {
    border-color: ${(props) => props.theme['yellow-dark']};
  }
  &[data-state='blurred'] {
    border-color: ${(props) => props.theme['base-button']};
  }
  input {
    color: ${(props) => props.theme['base-text']};
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 12px;
    outline: none;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
  span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    line-height: 130%;
    font-weight: 400;
    color: ${(props) => props.theme['base-label']};
    padding-right: 12px;
    font-style: italic;
  }
`
export const ErrorMessage = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  line-height: 130%;
  font-weight: 700;
  font-weight: 400;
  color: red;
`
