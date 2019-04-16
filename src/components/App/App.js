import React, { Component } from 'react';
import TodoList from '../TodoList/TodoList';
import AppHeader from '../AppHeader/AppHeader';
import TodoListSearch from '../TodoListSearch/TodoListSearch';
import TodoListItemFilter from '../TodoListItemFilter/TodoListItemFilter';
import './App.css';
import TodoListAdd from '../TodoListAdd/TodoListAdd';

export default class App extends Component {
  maxId = 100;

  constructor(props) {
    super(props);
    this.state = {
      todoData: [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Learn React', important: true, id: 2 },
        { label: 'Train', important: true, id: 3 },
      ],
    };

    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
  };

  deleteItem(id) {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      /**
       * IMPORTANT!
       * NEVER change the original data
       * ALWAYS do a copy and work with it
       **/
      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1),
      ];
      return {
        todoData: newArray,
      };
    });
  }

  addItem(text) {
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++,
    };

    this.setState(({ todoData }) => {

      /**
       * IMPORTANT!
       * NEVER change the original data
       * ALWAYS do a copy and work with it
       **/
      const newArray = [
        ...todoData,
        newItem,
      ];
      return {
        todoData: newArray,
      };
    });
  }

  render() {
    return (
      <div className="app">
        <AppHeader toDo={1} done={10}/>
        <div className="search-menu">
          <TodoListSearch/>
          <TodoListItemFilter/>
        </div>
        <TodoList
          todos={this.state.todoData}
          onDeleted={(id) => this.deleteItem(id)}
        />
        <TodoListAdd
          onAddListItem={(text) => this.addItem(text)}
        />
      </div>
    );
  }
}
