import React, { Component } from 'react';
import './TodoListAdd.css';

export default class TodoListAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.onAddListItem(this.state.label);
    this.setState({
      label: '',
    });
  }

  onInputChange(event) {
    this.setState({
      label: event.target.value,
    });
  }

  render() {
    return (
      <form className="todo-list-add d-flex"
            onSubmit={this.onFormSubmit}
      >
        <input className="form-control"
               type="text"
               placeholder="type to add"
               value={this.state.label}
               onChange={this.onInputChange}
        />
        <button className="btn btn-info">Add</button>
      </form>
    );
  }
}
