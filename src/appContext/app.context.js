import React, { createContext } from 'react'

const modalState = {
  isOpen: false,
  setIsOpen: () => {},
  toEditTodoItem: {},
  setToEditTodoItem: () => {},
  todoList: {
    data: [],
    isLoading: true,
    hasError: false
  },
  setTodoList: () => {}
}

const AppContext = createContext(modalState)

export default AppContext
