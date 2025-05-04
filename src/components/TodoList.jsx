import React, { useState } from 'react'
import TodoItem from './TodoItem'
import AddTodoForm from './AddTodoForm'

function TodoList() {
  // Initialize todos state
  const [todos, setTodos] = useState([
    {id: 0, text: 'Clean', completed: false},
    {id: 1, text: 'Wash', completed: false}, 
    {id: 2, text: 'Brush', completed: true}
  ]);

  function addTodo(text) {
    const newTodos = todos.slice();
    const newTodo = {id: todos.length, text: text, completed: false};
    newTodos.push(newTodo);
    setTodos(newTodos);
  }

  function toggleTodo(id) {
    const newTodos = todos.map(task => {
        if (task.id === id) {
            return { ...task, completed: !task.completed };
        }
        return task;
    })
    setTodos(newTodos);
  }

  function deleteTodo(id) {
    const newTodos = todos.filter(task => {
        return (task.id !== id);
    })
    setTodos(newTodos);
  }
  
  return (
    <div className="todo-container">
      <AddTodoForm onAdd={addTodo}/>
      
      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItem 
            key={todo.id}  // Added key prop
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList