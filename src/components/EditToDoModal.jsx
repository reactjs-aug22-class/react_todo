import './EditToDoModal.styles.css'

import Form from 'react-bootstrap/Form'
import React from 'react'

export default function EditToDoModal({
  isOpen,
  setIsOpen,
  todoList,
  setTodoList,
  toEditTodoItem,
  setToEditTodoItem
}) {
  const onCancel = e => {
    e.preventDefault()
    setIsOpen(false)
  }

  const onSave = e => {
    e.preventDefault()

    // get the item to be be changed
    const targetItem = todoList.find(item => item.id === toEditTodoItem.id)

    // get the index of tha item
    const targetItemIndex = todoList.findIndex(
      item => item.id === toEditTodoItem.id
    )

    // make copy of the todo item, unsafe to change the original ref
    const targetItemCopy = { ...targetItem }

    // make copy of the todoList, unsafe to change the original ref
    const todoListCopy = [...todoList]
    // toggle the isComplete
    targetItemCopy.text = toEditTodoItem.text

    todoListCopy[targetItemIndex] = targetItemCopy

    setTodoList(prevState => ({
      ...prevState,
      data: todoListCopy
    }))
    setToEditTodoItem({})
    setIsOpen(false)
  }

  return (
    <div className={`edit-form-container ${isOpen ? '' : 'hide'}`}>
      <form className="edit-form">
        <div className="d-flex justify-content-between">
          <p>Edit to do</p>
          <span onClick={onCancel} className="material-symbols-outlined close">
            close
          </span>
        </div>

        <Form.Control
          type="text"
          value={toEditTodoItem.text}
          onChange={e => {
            setToEditTodoItem({ ...toEditTodoItem, text: e.target.value })
          }}
        />

        <div className="mt-2 d-flex justify-content-end">
          <button className="btn text-success m-0 p-0" onClick={onSave}>
            <span className="material-symbols-outlined">save</span>{' '}
          </button>
          <button
            className="btn text-danger btn-sm  m-0 p-0"
            onClick={onCancel}
          >
            <span className="material-symbols-outlined">backspace</span>
          </button>
        </div>
      </form>
    </div>
  )
}
