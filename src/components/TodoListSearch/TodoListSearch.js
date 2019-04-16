import React from 'react';
import './TodoListSearch.css';

export default function TodoListSearch() {
  return (
    <div className="todo-list-search">
      <input className="form-control"
             type="text"
             placeholder="type to search"/>
    </div>
  );
}
