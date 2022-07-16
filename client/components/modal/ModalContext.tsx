import React, {createContext, useMemo} from 'react'
import {Modal} from './Modal'
import {useModal, UseModalProps} from './Model.utils'

export const ModalContext = createContext<UseModalProps>(undefined as never)

export const ModalProvider: React.FC = ({children}) => {
  const {openModal, content} = useModal()

  const providerProps = useMemo(
    () => ({openModal, content}),
    [content, openModal]
  )

  return (
    <ModalContext.Provider value={providerProps}>
      {content && <Modal />}
      {children}
    </ModalContext.Provider>
  )
}
