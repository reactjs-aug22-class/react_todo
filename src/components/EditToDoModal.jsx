import './EditTodoModal.styles.css'

import React from 'react'

export default function EditToDoModal({
  isOpen,
  setIsOpen,
  modalInputText,
  setModalInputText,
  todoList,
  setTodoList,
  editModalCallee,
  setEditModalCallee
}) {
  const onCancel = e => {
    e.preventDefault()
    setIsOpen(false)
  }

  const onSave = e => {
    e.preventDefault()

    // get the item to be be changed
    const targetItem = todoList.find(item => item.id === editModalCallee)

    // get the index of tha item
    const targetItemIndex = todoList.findIndex(
      item => item.id === editModalCallee
    )

    // make copy of the todo item, unsafe to change the original ref
    const targetItemCopy = { ...targetItem }

    // make copy of the todoList, unsafe to change the original ref
    const todoListCopy = [...todoList]

    // toggle the isComplete
    targetItemCopy.text = modalInputText

    todoListCopy[targetItemIndex] = targetItemCopy

    setTodoList(todoListCopy)
    setEditModalCallee(undefined)
    setIsOpen(false)
  }

  return (
    <div className={`edit-form-container ${isOpen ? '' : 'hide'}`}>
      <form className="edit-form">
        <h6>Edit to do</h6>
        <input
          value={modalInputText}
          onChange={e => {
            setModalInputText(e.target.value)
          }}
        />
        <button onClick={onSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </form>
    </div>
  )
}
