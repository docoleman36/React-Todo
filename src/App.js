import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: todoData
    };
  }

  toggleItem = id => {
    console.log(id);

    this.setState({
      todo: this.state.todo.map(item => {
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

    let todos = this.state.todo.filter(todo => !todo.completed);
    this.setState({ todos });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          todo={this.state.todo}
          toggleItem={this.toggleItem}
        />
        <TodoForm
          value={this.state.todo}
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
          handleClearTodos={this.clearCompletedTodos}
        />
      </div>
    );
  }
}

export default App;