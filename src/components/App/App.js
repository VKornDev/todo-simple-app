import React from 'react';
import TodoList from '../TodoList/TodoList';
import AppHeader from '../AppHeader/AppHeader';
import TodoListSearch from '../TodoListSearch/TodoListSearch';
import TodoListItemFilter from '../TodoListItemFilter/TodoListItemFilter';
import './App.css';

export default function App() {
  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Learn React', important: true, id: 2 },
    { label: 'Train', important: true, id: 3 },
  ];

  return (
    <div className="app">
      <AppHeader toDo={1} done={10}/>
      <div className="search-menu">
        <TodoListSearch/>
        <TodoListItemFilter/>
      </div>
      <TodoList todos={todoData}/>
    </div>
  );
}
