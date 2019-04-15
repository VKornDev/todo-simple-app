import React, { Component } from 'react';
import './TodoListItem.css';

export default class TodoListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false,
      important: false,
    };

    this.onLabelClick = this.onLabelClick.bind(this);
    this.onImportantClick = this.onImportantClick.bind(this);
  }

  onLabelClick() {
    this.setState({
      done: !this.state.done,
    });
  }

  onImportantClick() {
    this.setState({
      important: !this.state.important,
    });
  }

  render() {
    const { label } = this.props;
    const { done, important } = this.state;

    let itemClassName = 'todo-list-item';
    if (done) {
      itemClassName += ' done';
    }
    if (important) {
      itemClassName += ' important';
    }

    return (
      <span className={itemClassName}>
        <span
          className="todo-list-item__label"
          onClick={this.onLabelClick}
        >{label}
        </span>
          <div className="todo-list-buttons float-right">
            <button className="btn btn-outline-success btn-sm"
                    type="button"
                    title="Delete"
            >
              <i className="fa fa-trash-o"/>
            </button>
            <button className="btn btn-outline-danger btn-sm"
                    type="button"
                    title="Important"
                    onClick={this.onImportantClick}
            >
              <i className="fa fa-exclamation"/>
            </button>
          </div>
      </span>
    );
  }
};
