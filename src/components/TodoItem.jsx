import React from 'react'

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="checkbox"
      />
      
      <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
      
      <button 
        onClick={() => onDelete(todo.id)} 
        className="todo-button delete-button"
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem