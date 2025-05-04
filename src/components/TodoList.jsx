import React from 'react'
import TodoItem from './TodoItem'
import AddTodoForm from './AddTodoForm'
import {useState} from 'react'

// TODO 2: Create state for storing todos array
id = 3;

const [todos, setTodos] = useState([
    {id: 0, text: 'Clean', completed: false},
    {id: 1, text: 'Wash', completed: false}, 
    {id: 2, text: 'Brush', completed: true}
  ]);

// TODO 3: Create addTodo function that takes a text parameter


function TodoList() {
  // TODO 6: Initialize todos state with useState
  useState([
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
// TODO 4: Create toggleTodo function that takes an id parameter
function toggleTodo(id) {
    const newTodos = todos.map(task => {
        if (task.id === id) {
            return { ...task, completed: !task.completed };
        }
        return task;
    })

    setTodos(newTodos);
}

// TODO 5: Create deleteTodo function that takes an id parameter
function deleteTodo(id) {
    const newTodos = todos.filter(task => {
        return (task.id !== id);
    })

    setTodos(newTodos);
}
  
  return (
    <div className="todo-container">
      {/* TODO 10: Pass addTodo function to AddTodoForm */}
      <AddTodoForm onAdd={addTodo}/>
      
      <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem 
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