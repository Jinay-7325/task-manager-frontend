import React, { useState } from 'react';

function TaskInput({ onAddTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(inputValue);
    setInputValue('');
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="input-container">
      <input
        type="text"
        className="task-input"
        placeholder="Add a new task..."
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button type="submit" className="add-btn">
        Add Task
      </button>
    </form>
  );
}

export default TaskInput;
