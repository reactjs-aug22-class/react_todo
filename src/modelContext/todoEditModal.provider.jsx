import React, { useState } from 'react'

import ModalContext from './todoEditModal.context'

function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [toEditTodoItem, setToEditTodoItem] = useState({})

  const value = { isOpen, setIsOpen, toEditTodoItem, setToEditTodoItem }

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

export default ModalProvider
