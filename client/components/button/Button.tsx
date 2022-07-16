import {PropsWithChildren} from 'react'
import {SButton} from './Button.styled'

interface Props {
  type: 'submit' | 'button'
  onClick?: () => void
  textOnly?: boolean
}

export function Button({
  children,
  type,
  onClick,
  textOnly,
}: PropsWithChildren<Props>) {
  return (
    <SButton type={type} onClick={onClick} textOnly={textOnly}>
      {children}
    </SButton>
  )
}
