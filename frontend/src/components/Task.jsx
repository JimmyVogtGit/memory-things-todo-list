import React from 'react';
import '../assets/css/Task.css';
import { Link } from 'react-router-dom';

function Task({ id, title }) {
  return (
    <div className='task-container'>
      <input type='checkbox' />
      <Link to={`my-task/${id}`}>{title}</Link>
    </div>
  );
}

export default Task;
