import React from 'react';
import './AppHeader.css';

const AppHeader = ({ toDo, done }) => {

  return (
    <div className="app-header d-flex">
      <h1>Todo Simple App</h1>
      <h2>{toDo === 1 ? `${toDo} more thing to do` : `${toDo} more things to do`}, {done} done</h2>
    </div>
  );
};

export default AppHeader;
