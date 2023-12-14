import styled from 'styled-components'

export const Container = styled.label`
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 6px;
  border: 1px solid transparent;
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  text-transform: uppercase;

  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  line-height: 160%;
  font-weight: 400;
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['base-card']};
  }

  &[data-state='true'] {
    background-color: ${(props) => props.theme['purple-light']};
    border-color: ${(props) => props.theme['purple-80']};
  }

  input {
    display: none;
  }

  svg {
    color: ${(props) => props.theme['purple-80']};
  }
`
