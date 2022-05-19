import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import '../assets/css/Form.css';
import back from '../assets/img/back.png';

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
    <div className='container-form'>
      <h2>Ajouter vos tâches</h2>
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
      <Link to='/'>
        <img className='back-img-form' src={back} alt='back' />
      </Link>
    </div>
  );
}

export default Form;
