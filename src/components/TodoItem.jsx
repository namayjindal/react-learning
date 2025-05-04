import React from 'react'

// TODO 14: Destructure props: todo, onToggle, onDelete
function TodoItem() {
  return (
    <li className="todo-item">
      {/* TODO 15: Add checkbox input */}
      {/* TODO 16: Checkbox should be checked if todo.completed is true */}
      {/* TODO 17: Call onToggle with todo.id when checkbox changes */}
      
      {/* TODO 18: Display todo text */}
      {/* TODO 19: Add 'completed' class if todo.completed is true */}
      <span className={''}>{/* TODO 21: todo text */}</span> /* TODO 20: conditional class */
      
      {/* TODO 22: Add delete button */}
      {/* TODO 23: Call onDelete with todo.id when button is clicked */}
      <button className="todo-button delete-button">Delete</button>
    </li>
  )
}

export default TodoItem