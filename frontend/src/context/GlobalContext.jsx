import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  const [originTask, setOriginTask] = useState([
    {
      id: uuidv4(),
      title: 'Faire les courses',
      description: 'Allez a intermarché pour des courses',
    },
    {
      id: uuidv4(),
      title: 'Faire le ménage',
      description: 'Ne pas oublier de jeter les poubelles',
    },
    {
      id: uuidv4(),
      title: 'Faire un tour de moto',
      description: 'Ballade de quelques kilometres.',
    },
  ]);

  return (
    <GlobalContext.Provider
      value={{
        task: [originTask, setOriginTask],
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
