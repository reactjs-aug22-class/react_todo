// @ts-nocheck
import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({
  todoList,
  setTodoList,
  setIsOpen,
  setModalInputText
}) {
  return (
    <ul>
      {todoList.map((todoItem, index) => (
        <li key={index}>
          <TodoItem
            todoItem={todoItem}
            todoList={todoList}
            setTodoList={setTodoList}
            setIsOpen={setIsOpen}
            setModalInputText={setModalInputText}
          />
        </li>
      ))}
    </ul>
  )
}
