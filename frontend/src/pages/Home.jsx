import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Home.css';
import { GlobalContext } from '../context/GlobalContext';
import MyTask from '../components/MyTask';
import MyEndTask from '../components/MyEndTask';

function Home() {
  const globalContext = useContext(GlobalContext);
  const [originTask, setOriginTask] = globalContext.task;
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('tasks'));
    if (items) {
      setOriginTask(items);
    }
  }, []);
  const [title, setTitle] = globalContext.title;
  const [description, setDescription] = globalContext.description;
  const functionAddTask = globalContext.functionAddTask;
  const clearDatas = globalContext.clearDatas;

  const titleFunction = (e) => {
    setTitle(e);
  };
  const describeFunction = (e) => {
    setDescription(e);
  };
  return (
    <div className='home-container'>
      <button className='btn-form'>
        <Link to='/form'></Link>
      </button>
      <h2>Mes tâches en cours</h2>
      <MyTask />
      <div className='border'></div>
      <h2>Mes tâches terminées</h2>
      <MyEndTask />
      <button className='btn-clear' onClick={() => clearDatas()}></button>
    </div>
  );
}

export default Home;
