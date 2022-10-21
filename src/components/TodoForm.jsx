import React, { useRef } from 'react'

import { v4 as uuidv4 } from 'uuid'

export default function TodoForm({ setTodoList }) {
  const todoInputRef = useRef()
  const onAddTodo = e => {
    e.preventDefault()
    const newTodo = {
      id: uuidv4(),
      text: todoInputRef.current.value,
      isComplete: false
    }
    setTodoList(prev => [...prev, newTodo])
  }

  return (
    <form onSubmit={onAddTodo}>
      <label htmlFor="todo-input">Add todo: </label>
      <input type="text" id="todo-input" ref={todoInputRef} />
      <button>Add</button>
    </form>
  )
}
