import './EditToDoModel.styles.css'

import React, { useState } from 'react'

export default function EditToDoModal({ isOpen, setIsOpen }) {
  const onCancel = e => {
    e.preventDefault()
    setIsOpen(false)
  }
  return (
    <div className={`edit-form-container ${isOpen ? '' : 'hide'}`}>
      <form className="edit-form">
        <h6>Edit to do</h6>
        <input />
        <button>Ok</button>
        <button onClick={onCancel}>Cancel</button>
      </form>
    </div>
  )
}
