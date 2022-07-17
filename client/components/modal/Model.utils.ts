import {ReactNode, useContext, useEffect, useState} from 'react'
import {ModalContext} from './ModalContext'

interface OpenModalProps {
  content: ReactNode
}

export interface UseModalProps {
  // eslint-disable-next-line no-unused-vars
  openModal: (props: OpenModalProps) => void
  closeModal: () => void
  content: ReactNode
}

export const useModalHandler = (): UseModalProps => {
  const [modalContent, setModalContent] = useState<ReactNode>(null)

  const openModal = ({content}: OpenModalProps) => setModalContent(content)

  const closeModal = () => setModalContent(null)

  useEffect(() => {
    if (modalContent) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = ''
    }
  }, [modalContent])

  return {
    openModal,
    closeModal,
    content: modalContent,
  }
}

export const useModal = () => {
  const modal = useContext(ModalContext)

  return modal
}
