import React, { createContext } from 'react'

const modalState = {
  isOpen: false,
  setIsOpen: () => {},
  toEditTodoItem: {},
  setToEditTodoItem: () => {}
}

const ModalContext = createContext(modalState)

export default ModalContext
