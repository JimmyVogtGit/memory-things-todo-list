import React, { useContext } from 'react';
import '../assets/css/MyTask.css';
import { GlobalContext } from '../context/GlobalContext';
import Task from './Task';

function MyTask() {
  const colorStyle = ['#404142', '#DB3A34', '#FFC857', '#64B6AC'];
  const stateTask = useContext(GlobalContext);
  const [originTask, setOriginTask] = stateTask.task;
  const functionDeleteTask = stateTask.functionDeleteTask;

  const colorChoice = () => {
    const color = Math.floor(Math.random() * colorStyle.length);
    return colorStyle[color];
  };

  return (
    <div className='mytask-container'>
      {originTask.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          functionDeleteTask={functionDeleteTask}
          color={colorChoice()}
        />
      ))}
    </div>
  );
}

export default MyTask;
