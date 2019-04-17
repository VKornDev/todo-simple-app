import React from 'react';
import './TodoListItem.css';

export default function TodoListItem({ label, onDelete, onImportant, onDone, done, important }) {
  /* Different cases in state changing
  // When new state NOT DEPENDS ON previous one
  onLabelClick() {
    this.setState({
      done: !this.state.done,
    });
  }

  // When new state DEPENDS ON previous one
  onLabelClick() {
    this.setState(({ done }) => {
      return {
        done: !done,
      };
    });
  };

  // When new state DEPENDS ON previous one
  onImportantClick() {
    this.setState(({ important }) => {
      return {
        important: !important,
      };
    });
  }
  */

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
          onClick={onDone}
        >{label}
        </span>
          <div className="todo-list-buttons float-right">
            <button className="btn btn-outline-success btn-sm"
                    type="button"
                    title="Delete"
                    onClick={onDelete}
            >
              <i className="fa fa-trash-o"/>
            </button>
            <button className="btn btn-outline-danger btn-sm"
                    type="button"
                    title="Important"
                    onClick={onImportant}
            >
              <i className="fa fa-exclamation"/>
            </button>
          </div>
      </span>
  );
}
