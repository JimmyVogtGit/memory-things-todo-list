import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function Form() {
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

  const titleFunction = (e) => {
    setTitle(e);
  };
  const describeFunction = (e) => {
    setDescription(e);
  };
  return (
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
  );
}

export default Form;
