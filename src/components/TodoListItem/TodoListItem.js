import React, { Component } from 'react';
import './TodoListItem.css';

export default class TodoListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false,
    };

    this.onLabelClick = this.onLabelClick.bind(this);
  }

  onLabelClick() {
    this.setState({
      done: !this.state.done,
    });
  }

  render() {
    const { label, important = false } = this.props;
    const { done } = this.state;

    let isItemDone =  ' todo-list-item';
    if (done) {
      isItemDone += ' done';
    }

    const style = {
      color: important ? 'steelBlue' : 'black',
      fontWeight: important ? 'bold' : 'normal',
    };

    return (
      <span className={isItemDone}>
        <span
          className="todo-list-item__label"
          style={style}
          onClick={this.onLabelClick}
        >{label}
        </span>
          <div className="todo-list-buttons float-right">
            <button className="btn btn-outline-success btn-sm" type="button">
              <i className="fa fa-trash-o"/>
            </button>
            <button className="btn btn-outline-danger btn-sm" type="button">
              <i className="fa fa-exclamation"/>
            </button>
          </div>
      </span>
    );
  }
};
