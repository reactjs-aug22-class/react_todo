import React, { useState } from 'react'

import ModalContext from './todoEditModal.context'

function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [toEditTodoItem, setToEditTodoItem] = useState({})
  const [todoList, setTodoList] = useState({
    data: [],
    isLoading: true,
    hasError: false
  })

  const value = {
    isOpen,
    setIsOpen,
    toEditTodoItem,
    setToEditTodoItem,
    todoList,
    setTodoList
  }

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

export default ModalProvider
