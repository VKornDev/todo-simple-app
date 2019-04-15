import React, { Component } from 'react';
import './TodoListItemFilter.css';

export default class TodoListItemFilter extends Component {
  render() {
    return (
      <div className="todo-list-item-filter btn-group">
        <button type="button"
                className="btn btn-info">All
        </button>
        <button type="button"
                className="btn btn-light">Active
        </button>
        <button type="button"
                className="btn btn-light">Done
        </button>
      </div>
    );
  }
}
