import React, { useContext } from 'react';
import '../assets/css/MyTask.css';
import { GlobalContext } from '../context/GlobalContext';
import Task from './Task';

function MyTask() {
  const stateTask = useContext(GlobalContext);
  const [originTask, setOriginTask] = stateTask.task;

  return (
    <div className='mytask-container'>
      {originTask.map((task) => (
        <Task key={task.id} id={task.id} title={task.title} />
      ))}
    </div>
  );
}

export default MyTask;
