import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './components/TodoComponents/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: "",
      todos: []
    };
  }

  toggleItem = id => {

    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
  }

  handleChanges = e => {
    this.setState({
      todo: e.target.value
    });
  };


  addTodo = e => {
    e.preventDefault();
    const newTodo = {
      task: this.state.todo,
      completed: false,
      id: Date.now()
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
      todo: ''
    });
  };

  clearCompletedTodos = e => {
    e.preventDefault();

    this.setState({
      todos: this.state.todos.filter(value => {
        return (!value.completed)
      })
    })
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          todo={this.state.todos}
          toggleItem={this.toggleItem}
          handleClearTodos={this.clearCompletedTodos}
        />
        <TodoForm
          value={this.state.todo}
          handleChanges={this.handleChanges}
          addTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default App;