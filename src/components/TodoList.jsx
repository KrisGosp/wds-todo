import TodoItem from "./TodoItem"

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <ul className="list">
    {todos.length === 0 && "No tasks" }
    {todos.map(todo => {
      return (
      <TodoItem 
        {...todo}
        key={todo.id}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        />
      )
    })}
  </ul>
  )
}

export default TodoList