import React, {createContext, PropsWithChildren, useMemo} from 'react'
import {Modal} from './Modal'
import {useModalHandler, UseModalProps} from './Model.utils'

export const ModalContext = createContext<UseModalProps>(undefined as never)

export function ModalProvider({children}: PropsWithChildren<unknown>) {
  const {openModal, closeModal, content} = useModalHandler()

  const providerProps = useMemo(
    () => ({openModal, closeModal, content}),
    [closeModal, content, openModal]
  )

  return (
    <ModalContext.Provider value={providerProps}>
      {content && <Modal />}
      {children}
    </ModalContext.Provider>
  )
}
