import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/tasks';

  // Fetch all tasks
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (err) {
      setError('Failed to fetch tasks');
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  // Add a new task
  const addTask = async (title) => {
    if (!title.trim()) {
      setError('Task title cannot be empty');
      return;
    }

    try {
      setError(null);
      const response = await axios.post(API_URL, { title });
      setTasks([response.data, ...tasks]);
    } catch (err) {
      setError('Failed to add task');
      console.error('Error adding task:', err);
    }
  };

  // Delete a task
  const deleteTask = async (id) => {
    try {
      setError(null);
      await axios.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (err) {
      setError('Failed to delete task');
      console.error('Error deleting task:', err);
    }
  };

  return (
    <div className="app-container">
      <h1>📝 Task Manager</h1>
      {error && <div className="error">{error}</div>}
      <TaskInput onAddTask={addTask} />
      {loading ? (
        <div className="loading">Loading tasks...</div>
      ) : (
        <TaskList tasks={tasks} onDeleteTask={deleteTask} />
      )}
    </div>
  );
}

export default App;
