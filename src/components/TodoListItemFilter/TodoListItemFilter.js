import React, { Component } from 'react';
import './TodoListItemFilter.css';

export default class TodoListItemFilter extends Component {

  buttons = [
    { value: 'all', name: 'All' },
    { value: 'active', name: 'Active' },
    { value: 'done', name: 'Done' },
  ];

  render() {
    const { filter } = this.props;
    const buttons = this.buttons.map(({ value, name }) => {
      const isActive = filter === value;
      const classButton = isActive ? 'btn-info' : 'btn-light';
      return (
        <button type="button"
                className={` btn ${classButton}`}
                key={value}
                onClick={() => this.props.itemFilter(value)}
        >{name}
        </button>
      );
    });

    return (
      <div className="todo-list-item-filter btn-group">
        {buttons}
      </div>
    );
  }
}
