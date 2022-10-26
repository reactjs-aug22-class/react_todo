import React, { useRef } from 'react'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
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
    todoInputRef.current.value = ''
  }
  const onClearAll = () => {
    setTodoList([])
  }

  return (
    <div className="mb-3 ">
      <h1 className="text-center">Add To Do</h1>
      <Form onSubmit={onAddTodo} className="d-flex mb-3">
        <Form.Control type="text" id="todo-input" ref={todoInputRef} />
        <button className="btn btn-outline-primary px-2 ms-3 d-flex align-items-center">
          <span>Add</span>
          <span className="material-symbols-outlined">add_box</span>
        </button>
      </Form>
      <button
        className="btn btn-outline-danger px-2 d-flex align-items-center"
        onClick={onClearAll}
      >
        <span className="lead">Clear All</span>
        <span className="material-symbols-outlined">delete_sweep</span>
      </button>
    </div>
  )
}
