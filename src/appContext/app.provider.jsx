import React, { useMemo, useState } from 'react'

import ModalContext from './app.context'

function AppProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [toEditTodoItem, setToEditTodoItem] = useState({})
  const [todoList, setTodoList] = useState({
    data: [],
    isLoading: true,
    hasError: false
  })

  const value = useMemo(() => {
    return {
      isOpen,
      setIsOpen,
      toEditTodoItem,
      setToEditTodoItem,
      todoList,
      setTodoList
    }
  }, [todoList.data, isOpen, toEditTodoItem.text])

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

export default AppProvider
