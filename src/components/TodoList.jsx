import ModalContext from '../modelContext/todoEditModal.context'
import React from 'react'
import TodoItem from './TodoItem'
import { useContext } from 'react'

export default function TodoList() {
  const { todoList } = useContext(ModalContext)

  return (
    <ul className="list-group">
      {todoList.data.map((todoItem, index) => (
        <li className="list-group-item" key={index}>
          <TodoItem todoItem={todoItem} />
        </li>
      ))}
    </ul>
  )
}
