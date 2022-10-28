import 'bootstrap/dist/css/bootstrap.css'

// @ts-nocheck
import React, { useState } from 'react'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import EditTodoModal from './components/EditTodoModal'
import Row from 'react-bootstrap/Row'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  // lifting up state
  const [todoList, setTodoList] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [toEditTodoItem, setToEditTodoItem] = useState({})

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
      <Row>
        <Col className="mx-auto d-flex justify-content-center">
          <div>
            <EditTodoModal
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              todoList={todoList}
              setTodoList={setTodoList}
              toEditTodoItem={toEditTodoItem}
              setToEditTodoItem={setToEditTodoItem}
            />
            <TodoForm setTodoList={setTodoList} />
            <TodoList
              todoList={todoList}
              setTodoList={setTodoList}
              setIsOpen={setIsOpen}
              setToEditTodoItem={setToEditTodoItem}
            />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default App
