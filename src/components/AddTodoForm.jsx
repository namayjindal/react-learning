import React, { useState } from 'react'

function AddTodoForm({ onAdd }) {
  const [inputValue, setInputValue] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      onAdd(inputValue)
      setInputValue('')
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a new todo"
        className="todo-input"
      />
      <button type="submit" className="todo-button">Add Todo</button>
    </form>
  )
}

export default AddTodoForm