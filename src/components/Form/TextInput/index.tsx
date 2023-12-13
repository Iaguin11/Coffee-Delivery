import {
  HTMLAttributes,
  InputHTMLAttributes,
  LegacyRef,
  forwardRef,
  useState,
} from 'react'
import { FieldError } from 'react-hook-form'
import { Box, Container, ErrorMessage } from './styles'
type Props = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean
  containerProps?: HTMLAttributes<HTMLDivElement>
  error?: FieldError
}
export const TextInput = forwardRef(function TextInput(
  { optional, error, containerProps, onFocus, ...rest }: Props,
  ref: LegacyRef<HTMLInputElement>,
) {
  const [isFocused, setIsFocused] = useState(false)

  function handleFocus(ev: React.FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(true)
    onFocus?.(ev)
  }
  function handleBlur(ev: React.FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(true)
    onFocus?.(ev)
  }
  return (
    <Box {...containerProps}>
      <Container data-state={isFocused ? 'focused' : 'blurred'}>
        <input
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          {...rest}
        />
        {optional ? <span>Opcional</span> : null}
      </Container>
      {error?.message ? (
        <ErrorMessage role="alert">{error.message}</ErrorMessage>
      ) : null}
    </Box>
  )
})
