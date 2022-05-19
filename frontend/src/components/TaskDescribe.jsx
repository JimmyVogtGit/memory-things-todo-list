import React, { useContext } from 'react';
import '../assets/css/TaskDescribe.css';
import { useParams, Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import back from '../assets/img/back.png';

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
      <Link to='/'>
        <img className='back-img' src={back} alt='back' />
      </Link>
    </div>
  );
}

export default TaskDescribe;
