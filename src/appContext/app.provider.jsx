import React, { useMemo, useState } from 'react'

import AppContext from './app.context'

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

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppProvider
