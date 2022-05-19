import React, { useContext, useEffect } from 'react';
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
      <div className='text-add-task'>
        <h1>Ajouter une tâche</h1>
      </div>

      <form
        onSubmit={(e) => functionAddTask(e, title, description)}
        className='form-container'
      >
        <label htmlFor='add-task'>Titre :</label>
        <input
          onChange={(e) => titleFunction(e.target.value)}
          value={title}
          type='text'
        />
        <label>Description :</label>
        <textarea
          onChange={(e) => describeFunction(e.target.value)}
          value={description}
          type='text'
        />
        <button className='btn-add-task'></button>
      </form>
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
