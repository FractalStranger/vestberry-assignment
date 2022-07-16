import {useContext} from 'react'
import {Bg, Content, Wrapper} from './Modal.styled'
import {ModalContext} from './ModalContext'

export function Modal() {
  const {content} = useContext(ModalContext)

  return (
    <Wrapper>
      <Bg />
      <Content>{content}</Content>
    </Wrapper>
  )
}
