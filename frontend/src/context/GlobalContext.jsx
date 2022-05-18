import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deleteTask, setDeleteTask] = useState([]);
  const [originTask, setOriginTask] = useState([
    {
      id: uuidv4(),
      title: 'Faire ses courses',
      description: 'Allez au magasin pour faire les courses',
    },
    {
      id: uuidv4(),
      title: 'Faire le ménage',
      description: 'Ne pas oublier de jeter les poubelles',
    },
    {
      id: uuidv4(),
      title: 'Faire un tour de moto',
      description: 'Ballade de quelques kilometres avec les copains.',
    },
  ]);

  const functionDeleteTask = (id) => {
    const addDeleteTask = originTask.filter((el) => el.id === id);
    const newArr = [...deleteTask];
    newArr.push(addDeleteTask[0]);
    setDeleteTask(newArr);
    const filterTask = originTask.filter((el) => el.id !== id);
    setOriginTask(filterTask);
  };

  const functionAddTask = (e, title, description) => {
    e.preventDefault();
    if (title === '') {
      return alert('Titre Obligatoire');
    }
    const newArr = [...originTask];
    const newObj = {};
    newObj.id = uuidv4();
    newObj.title = title;
    newObj.description = description;
    newArr.push(newObj);
    localStorage.setItem('tasks', JSON.stringify(newArr));
    setOriginTask(newArr);
    setTitle('');
    setDescription('');
  };

  return (
    <GlobalContext.Provider
      value={{
        task: [originTask, setOriginTask],
        title: [title, setTitle],
        description: [description, setDescription],
        deleteTask: [deleteTask, setDeleteTask],
        functionAddTask: functionAddTask,
        functionDeleteTask: functionDeleteTask,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
