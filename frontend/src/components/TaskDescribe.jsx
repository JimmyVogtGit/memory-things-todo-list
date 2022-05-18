import React, { useContext } from 'react';
import '../assets/css/TaskDescribe.css';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

function TaskDescribe() {
  const params = useParams();
  const globalContext = useContext(GlobalContext);
  const [originTask, setOriginTask] = globalContext.task;

  return (
    <div className='taskdescribe-container'>
      {originTask
        .filter((el) => el.id === params.id)
        .map((task) => (
          <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
          </div>
        ))}
    </div>
  );
}

export default TaskDescribe;
