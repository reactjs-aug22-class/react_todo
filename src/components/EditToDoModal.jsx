import './EditToDoModal.styles.css'

import React, { useContext, useEffect, useState } from 'react'

import Form from 'react-bootstrap/Form'
import ModalContext from '../modelContext/todoEditModal.context'

export default function EditToDoModal() {
  const [editInputValue, setEditInputValue] = useState('')
  const {
    isOpen,
    setIsOpen,
    toEditTodoItem,
    setToEditTodoItem,
    todoList,
    setTodoList
  } = useContext(ModalContext)

  useEffect(() => {
    if (toEditTodoItem.text) {
      setEditInputValue(toEditTodoItem.text)
    }
  }, [toEditTodoItem])

  const onCancel = e => {
    e.preventDefault()
    setIsOpen(false)
  }

  const onSave = e => {
    e.preventDefault()

    // get the item to be be changed
    const targetItem = todoList.data.find(item => item.id === toEditTodoItem.id)

    // get the index of tha item
    const targetItemIndex = todoList.data.findIndex(
      item => item.id === toEditTodoItem.id
    )

    // make copy of the todo item, unsafe to change the original ref
    const targetItemCopy = { ...targetItem }

    // make copy of the todoList, unsafe to change the original ref
    const todoListCopy = [...todoList.data]
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
          value={editInputValue}
          onChange={e => {
            setEditInputValue(e.target.value)
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
