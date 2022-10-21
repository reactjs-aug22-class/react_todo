import React from 'react'

export default function TodoItem({ todoItem, todoList, setTodoList }) {
  const onDelete = () => {
    const newTodoList = todoList.filter(item => item.id !== todoItem.id)
    setTodoList(newTodoList)
  }

  const onCompleteTodo = () => {
    // get the item to be be changed
    const targetItem = todoList.find(item => item.id === todoItem.id)

    // get the index of tha item
    const targetItemIndex = todoList.findIndex(item => item.id === todoItem.id)

    // make copy of the todo item, unsafe to change the original ref
    const targetItemCopy = { ...targetItem }

    // make copy of the todoList, unsafe to change the original ref
    const todoListCopy = [...todoList]

    // toggle the isComplete
    targetItemCopy.isComplete = !targetItemCopy.isComplete

    todoListCopy[targetItemIndex] = targetItemCopy

    setTodoList(todoListCopy)
  }

  const onEdit = () => {
    // get the item to be be changed
    const targetItem = todoList.find(item => item.id === todoItem.id)

    // get the index of tha item
    const targetItemIndex = todoList.findIndex(item => item.id === todoItem.id)

    // make copy of the todo item, unsafe to change the original ref
    const targetItemCopy = { ...targetItem }

    // make copy of the todoList, unsafe to change the original ref
    const todoListCopy = [...todoList]

    // toggle the isComplete
    targetItemCopy.text = '' //???

    todoListCopy[targetItemIndex] = targetItemCopy

    setTodoList(todoListCopy)
  }

  return (
    <>
      <input
        type="checkbox"
        aria-label="complete todo"
        checked={todoItem.isComplete}
        onChange={onCompleteTodo}
      />
      <span
        style={{
          textDecoration: todoItem.isComplete ? 'line-through' : 'none'
        }}
      >
        {todoItem.text}
      </span>
      <button onClick={onDelete}>del</button>
      <button onClick={onEdit}>edit</button>
    </>
  )
}
