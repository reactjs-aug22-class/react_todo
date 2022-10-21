// @ts-nocheck
import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ todoList, setTodoList }) {
  return (
    <ul>
      {todoList.map((todoItem, index) => (
        <li key={index}>
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
