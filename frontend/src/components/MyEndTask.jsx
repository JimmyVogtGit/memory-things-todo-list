import React, { useContext } from 'react';
import '../assets/css/MyEndTask.css';
import { GlobalContext } from '../context/GlobalContext';

function MyEndTask() {
  const globalContext = useContext(GlobalContext);
  const [deleteTask, setDeleteTask] = globalContext.deleteTask;
  return (
    <div className='myendtask-container'>
      {deleteTask.map((element) => (
        <p key={element.id}>{element.title}</p>
      ))}
    </div>
  );
}

export default MyEndTask;
