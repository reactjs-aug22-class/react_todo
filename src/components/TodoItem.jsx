import './TodoItem.styles.css'

import React, { useContext } from 'react'

import AppContext from '../appContext/app.context'
import Form from 'react-bootstrap/Form'

export default function TodoItem({ todoItem }) {
  const { setIsOpen, setToEditTodoItem, todoList, setTodoList } =
    useContext(AppContext)

  const onDelete = () => {
    const newTodoList = todoList.data.filter(item => item.id !== todoItem.id)
    setTodoList(prevState => ({
      ...prevState,
      data: newTodoList
    }))
  }

  const onCompleteTodo = () => {
    // get the item to be be changed
    const targetItem = todoList.data?.find(item => item.id === todoItem.id)

    // get the index of tha item
    const targetItemIndex = todoList.data?.findIndex(
      item => item.id === todoItem.id
    )

    // make copy of the todo item, unsafe to change the original ref
    const targetItemCopy = { ...targetItem }

    // make copy of the todoList, unsafe to change the original ref
    const todoListCopy = [...todoList.data]

    // toggle the isComplete
    targetItemCopy.isComplete = !targetItemCopy.isComplete

    todoListCopy[targetItemIndex] = targetItemCopy
    setTodoList(prevState => ({
      ...prevState,
      data: todoListCopy
    }))
  }

  const onEdit = () => {
    setIsOpen(true)
    setToEditTodoItem({ ...todoItem })
  }

  return (
    <div className="d-flex flex-gap-2 align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <Form.Check
          type="checkbox"
          className="me-1"
          aria-label="complete todo"
          checked={todoItem.isComplete}
          onChange={onCompleteTodo}
        />
        <span
          className="lead"
          style={{
            textDecoration: todoItem.isComplete ? 'line-through' : 'none'
          }}
        >
          {todoItem.text}
        </span>
      </div>

      <div>
        <button className="btn text-danger m-0 p-0" onClick={onDelete}>
          <span className="material-symbols-outlined">delete_forever</span>
        </button>
        <button className="btn text-secondary btn-sm  m-0 p-0" onClick={onEdit}>
          <span className="material-symbols-outlined">edit</span>
        </button>
      </div>
    </div>
  )
}
