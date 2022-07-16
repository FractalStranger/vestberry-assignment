import {useContext} from 'react'
import {Bg, Content, Wrapper} from './Modal.styled'
import {ModalContext} from './ModalContext'

export function Modal() {
  const {content, closeModal} = useContext(ModalContext)

  return (
    <Wrapper>
      <Bg onClick={closeModal} />
      <Content>{content}</Content>
    </Wrapper>
  )
}
