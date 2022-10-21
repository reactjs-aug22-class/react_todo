// @ts-nocheck
import React, { useState } from 'react'

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  // lifting up state
  const [todoList, setTodoList] = useState([])
  return (
    <>
      <TodoForm setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </>
  )
}

export default App
