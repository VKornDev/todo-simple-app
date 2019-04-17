import React, { Component } from 'react';
import './TodoListSearch.css';

export default class TodoListSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    const stringValue = event.target.value;
    this.setState({
      searchString: stringValue,
    });
    this.props.searchItem(stringValue);
  }

  render() {
    return (
      <div className="todo-list-search">
        <input className="form-control"
               type="text"
               placeholder="type to search"
               value={this.state.searchSubstring}
               onChange={this.onInputChange}
        />
      </div>
    );
  }
}
