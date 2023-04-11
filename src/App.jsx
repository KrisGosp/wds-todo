import { useEffect, useState } from "react"
import NewTodoForm from "./components/NewTodoForm"
import TodoList from "./components/TodoList"
import "./styles.css"

const App = () => {

  const [ todos, setTodos ] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue === null) return []
    return JSON.parse(localValue)
  })


  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])


  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos, {
          id: crypto.randomUUID(), title: title, completed: false
        }
      ]
    })
  }

  function toggleTodo(checkedId, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === checkedId) {
          return { ...todo, completed }
        }
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  
  return (

    <>
    <NewTodoForm onSubmit={addTodo} />

    <h1 className="header">Todo List</h1>
    <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
    </>
  )
}

export default App