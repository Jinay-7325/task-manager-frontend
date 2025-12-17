import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDeleteTask }) {
  if (tasks.length === 0) {
    return <p className="empty-message">No tasks yet. Add one to get started! 🚀</p>;
  }

  return (
    <ul className="tasks-list">
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onDelete={onDeleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
