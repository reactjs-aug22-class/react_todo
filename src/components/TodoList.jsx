// @ts-nocheck
import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ todoList, setTodoList }) {
  return (
    <ul className="list-group">
      {todoList.map((todoItem, index) => (
        <li className="list-group-item" key={index}>
          <TodoItem
            todoItem={todoItem}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        </li>
      ))}
    </ul>
  )
}
