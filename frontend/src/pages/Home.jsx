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
      <form
        onSubmit={(e) => functionAddTask(e, title, description)}
        className='form-container'
      >
        <label htmlFor='add-task'>Title :</label>
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
        <button>add</button>
      </form>
      <MyTask />
      <MyEndTask />
      <button onClick={() => clearDatas()}>clear datas</button>
    </div>
  );
}

export default Home;
