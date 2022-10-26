// @ts-nocheck
import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({
  todoList,
  setTodoList,
  setIsOpen,
  setModalInputText,
  setEditModalCallee
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
            setEditModalCallee={setEditModalCallee}
          />
        </li>
      ))}
    </ul>
  )
}
