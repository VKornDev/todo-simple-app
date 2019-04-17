import React, { Component } from 'react';
import TodoList from '../TodoList/TodoList';
import AppHeader from '../AppHeader/AppHeader';
import TodoListSearch from '../TodoListSearch/TodoListSearch';
import TodoListItemFilter from '../TodoListItemFilter/TodoListItemFilter';
import './App.css';
import TodoListAdd from '../TodoListAdd/TodoListAdd';

export default class App extends Component {
  startId = 1;

  constructor(props) {
    super(props);
    this.state = {
      todoData: [
        this.createTodoItem('Drink Coffee'),
        this.createTodoItem('Learn React'),
        this.createTodoItem('Train'),
      ],
      searchSubstring: '',
    };

    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleDone = this.onToggleDone.bind(this);
    this.searchItem = this.searchItem.bind(this);
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.startId++,
    };
  }

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
    const newItem = this.createTodoItem(text);

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

  searchItem(todoData, searchSubstring) {
    if (searchSubstring.length === 0) {
      return todoData;
    }

    return todoData.filter((el) => el.label.toLowerCase()
    .indexOf(searchSubstring.toLowerCase()) > -1);
  }

  toggleProperty(array, id, propName) {
    const idx = array.findIndex((el) => el.id === id);

    const newItem = { ...array[idx], [propName]: !array[idx][propName] };

    return [
      ...array.slice(0, idx),
      newItem,
      ...array.slice(idx + 1),
    ];
  }

  onToggleDone(id) {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done'),
      };
    });
  }

  onToggleImportant(id) {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important'),
      };
    });
  }

  render() {
    const { todoData, searchSubstring } = this.state;
    const visibleItems = this.searchItem(todoData, searchSubstring);
    let itemsDoneCounter = todoData.filter((el) => el.done).length;
    let itemsTodoCounter = todoData.length - itemsDoneCounter;
    return (
      <div className="app">
        <AppHeader
          toDo={itemsTodoCounter === 0 ? 'No' : itemsTodoCounter}
          done={itemsDoneCounter}/>

        <div className="search-menu d-flex">
          <TodoListSearch
            searchItem={(text) => this.setState({ searchSubstring: text })}/>
          <TodoListItemFilter/>
        </div>

        <TodoList
          items={visibleItems}
          onDelete={(id) => this.deleteItem(id)}
          onImportant={(id) => this.onToggleImportant(id)}
          onDone={(id) => this.onToggleDone(id)}
        />

        <TodoListAdd
          onAddListItem={(text) => this.addItem(text)}
        />
      </div>
    );
  }
}
