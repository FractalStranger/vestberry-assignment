import {ReactNode, useCallback, useState} from 'react'

interface OpenModalProps {
  content: ReactNode
}

export interface UseModalProps {
  // eslint-disable-next-line no-unused-vars
  openModal: (props: OpenModalProps) => void
  content: ReactNode
}

export const useModal = (): UseModalProps => {
  const [modalContent, setModalContent] = useState<ReactNode>(null)

  const openModal = useCallback(({content}: OpenModalProps) => {
    setModalContent(content)
  }, [])

  return {
    openModal,
    content: modalContent,
  }
}
