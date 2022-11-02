import 'bootstrap/dist/css/bootstrap.css'

// @ts-nocheck
import React, { useEffect, useState } from 'react'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import EditTodoModal from './components/EditToDoModal'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  // lifting up state
  const [todoList, setTodoList] = useState({
    data: [],
    isLoading: true,
    hasError: false
  })
  const [isOpen, setIsOpen] = useState(false)
  const [toEditTodoItem, setToEditTodoItem] = useState({})

  // this code will run once, at the mounting phone
  useEffect(() => {
    const data = fetch('./mocks/data.json')
      .then(response => response.json())
      .then(dt => {
        setTodoList(prevState => ({
          ...prevState,
          data: dt.data,
          isLoading: false
        }))
      })
      .catch(err => {
        console.log(err)
        setTodoList(prevState => ({
          ...prevState,
          data: [],
          isLoading: false,
          hasError: true
        }))
      })
  }, [])

  return (
    <Container className="mt-4">
      <Col className="mx-auto d-flex justify-content-center">
        <Row>
          <div>
            <EditTodoModal
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              todoList={todoList.data}
              setTodoList={setTodoList}
              toEditTodoItem={toEditTodoItem}
              setToEditTodoItem={setToEditTodoItem}
            />
            <TodoForm setTodoList={setTodoList} />
            {todoList.isLoading ? (
              <Spinner animation="grow" />
            ) : todoList.hasError ? (
              <p className="lead text-danger">
                Sorry, the app has error, try again later
              </p>
            ) : (
              <TodoList
                todoList={todoList.data}
                setTodoList={setTodoList}
                setIsOpen={setIsOpen}
                setToEditTodoItem={setToEditTodoItem}
              />
            )}
          </div>
        </Row>
      </Col>
    </Container>
  )
}

export default App
