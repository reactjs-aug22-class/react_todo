import 'bootstrap/dist/css/bootstrap.css'

// @ts-nocheck
import React, { useContext, useEffect } from 'react'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import EditTodoModal from './components/EditToDoModal'
import ModalContext from './modelContext/todoEditModal.context'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const { todoList, setTodoList } = useContext(ModalContext)
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
            <EditTodoModal />
            <TodoForm setTodoList={setTodoList} />
            {todoList.isLoading ? (
              <Spinner animation="grow" />
            ) : todoList.hasError ? (
              <p className="lead text-danger">
                Sorry, the app has error, try again later
              </p>
            ) : (
              <TodoList />
            )}
          </div>
        </Row>
      </Col>
    </Container>
  )
}

export default App
