import React from 'react';
import './TodoListSearch.css';

const TodoListSearch = () => {
  return (
    <div className="todo-list-search">
      <input className="todo-list-search__input form-control" type="text" placeholder="search"/>
    </div>
  );
};

export default TodoListSearch;
