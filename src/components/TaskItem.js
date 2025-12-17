import React from 'react';

function TaskItem({ task, onDelete }) {
  const formatDate = (date) => {
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  return (
    <li className="task-item">
      <div className="task-content">
        <div className="task-title">{task.title}</div>
        <div className="task-date">{formatDate(task.createdAt)}</div>
      </div>
      <button
        className="delete-btn"
        onClick={() => onDelete(task._id)}
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
