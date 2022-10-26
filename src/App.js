// @ts-nocheck
import React, { useState } from 'react'

import EditToDo from './components/EditToDoModal'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  // lifting up state
  const [todoList, setTodoList] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <EditToDoModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <TodoForm setTodoList={setTodoList} />
      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        setIsOpen={setIsOpen}
      />
    </>
  )
}

export default App
