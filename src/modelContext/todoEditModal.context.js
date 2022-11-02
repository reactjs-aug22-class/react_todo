import React, { createContext } from 'react'

const modalState = { isOpen: false, setIsOpen: () => {} }

const ModalContext = createContext(modalState)

export default ModalContext
