import React, { Component } from 'react';

class TodoForm extends Component {
  constructor() {
    super();
  };

  render() {
    return (
      <form onSubmit={this.props.addTodo}>
        <input
          type="text"
          value={this.props.value}
          name="info"
          onChange={this.props.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;