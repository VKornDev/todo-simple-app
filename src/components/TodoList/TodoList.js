import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

const TodoList = ({ items, onDelete, onImportant, onDone }) => {
  const elements = items.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li className="list-group-item" key={id}>
        <TodoListItem
          {...itemProps}
          onDelete={() => onDelete(id)}
          onImportant={() => onImportant(id)}
          onDone={() => onDone(id)}
        />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      {elements}
    </ul>
  );
};

export default TodoList;
