import './EditTodoModal.styles.css'

import React from 'react'

export default function EditToDoModal({
  isOpen,
  setIsOpen,
  modalInputText,
  setModalInputText
}) {
  const onCancel = e => {
    e.preventDefault()
    setIsOpen(false)
  }
  return (
    <div className={`edit-form-container ${isOpen ? '' : 'hide'}`}>
      <form className="edit-form">
        <h6>Edit to do</h6>
        <input value={modalInputText} />
        <button>Ok</button>
        <button onClick={onCancel}>Cancel</button>
      </form>
    </div>
  )
}
