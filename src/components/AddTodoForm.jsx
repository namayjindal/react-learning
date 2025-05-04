import React from 'react'

// TODO 24: Import useState hook
// TODO 25: Destructure onAdd prop
function AddTodoForm() {
  // TODO 26: Create state for input value
  
  // TODO 27: Create handleSubmit function
  // - Prevent default form submission
  // - Check if input is not empty
  // - Call onAdd with input value
  // - Clear input
  
  return (
    <form onSubmit={''} className="todo-form"> /* TODO 28: attach handleSubmit */
      <input
        type="text"
        value={''} /* TODO 29: bind to state */
        onChange={''} /* TODO 30: update state on change */
        placeholder="Enter a new todo"
        className="todo-input"
      />
      <button type="submit" className="todo-button">Add Todo</button>
    </form>
  )
}

export default AddTodoForm