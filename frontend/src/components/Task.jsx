import React from 'react';
import '../assets/css/Task.css';
import { Link } from 'react-router-dom';
import describe from '../assets/img/describe.png';

function Task({ id, title, functionDeleteTask, color }) {
  return (
    <div className='task-container' style={{ backgroundColor: color }}>
      <button
        className='btn-trash'
        onClick={() => functionDeleteTask(id)}
      ></button>
      <Link to={`my-task/${id}`}>{title}</Link>
    </div>
  );
}

export default Task;
