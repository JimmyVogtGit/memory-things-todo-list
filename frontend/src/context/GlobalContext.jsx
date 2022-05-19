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
      title: 'Exemple de titre 1',
      description: 'Exemple de description 1 avec du texte',
    },
    {
      id: uuidv4(),
      title: 'Exemple de titre 2',
      description: 'Exemple de description 2 avec du texte',
    },
    {
      id: uuidv4(),
      title: 'Exemple de titre 3',
      description: 'Exemple de description 3 avec du texte',
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

    if (title.length !== 0) {
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
    }
  };

  const clearDatas = () => {
    console.log('Clean the local Storage');
    localStorage.clear();
    window.location.reload();
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
        clearDatas: clearDatas,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
