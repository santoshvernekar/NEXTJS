"use client"
import React, { useState } from 'react';

const TodosForm = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the backend or update the state
    console.log('Task Title:', taskTitle);
    console.log('Task Description:', taskDescription);

    // Clear the form after submission
    setTaskTitle('');
    setTaskDescription('');
  };

  return (
    <div className='login'>
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Task Title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Task Description"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
          <button type="submit">Add Task</button>
        </form>
      </section>
    </div>
  );
};

export default TodosForm;
