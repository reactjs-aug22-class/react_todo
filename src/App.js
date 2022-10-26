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
  const [editModalCallee, setEditModalCallee] = useState()

  return (
    <>
      <EditTodoModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalInputText={modalInputText}
        setModalInputText={setModalInputText}
        todoList={todoList}
        setTodoList={setTodoList}
        editModalCallee={editModalCallee}
        setEditModalCallee={setEditModalCallee}
      />
      <TodoForm setTodoList={setTodoList} />
      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        setIsOpen={setIsOpen}
        modalInputText={modalInputText}
        setModalInputText={setModalInputText}
        setEditModalCallee={setEditModalCallee}
      />
    </>
  )
}

export default App
