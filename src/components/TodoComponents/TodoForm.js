import React, { Component } from 'react';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      info: ""
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitItem = e => {
    e.preventDefault();
    this.props.addTodo(this.state.info);
  }

  render() {
    return (
      <form onSubmit={this.submitItem}>
        <input
          type="text"
          value={this.info}
          name="info"
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    )
  }
}

export default TodoForm;