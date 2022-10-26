// @ts-nocheck
import React, { useState } from 'react'

import EditTodoModal from './components/EditTodoModal'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  // lifting up state
  const [todoList, setTodoList] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [modalInputText, setModalInputText] = useState('')

  return (
    <>
      <EditTodoModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalInputText={modalInputText}
        setModalInputText={setModalInputText}
      />
      <TodoForm setTodoList={setTodoList} />
      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        setIsOpen={setIsOpen}
        setModalInputText={setModalInputText}
      />
    </>
  )
}

export default App
