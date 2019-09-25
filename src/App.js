import React, {Component} from 'react';

import './css/reset.min.css';
import './css/App.css';

import TodoList from './components/TodoList';
import todosData from './todosData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: JSON.parse(localStorage.getItem('todoList')) || todosData,
    }
  }

  updateLocalStorage = () => {
    localStorage.setItem('todoList', JSON.stringify(this.state.todos));
  };

  updateDate = id => {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos,
      }
    },() => {
      this.updateLocalStorage();
    });
  };

  removeDate = id => {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.filter((todo) => todo.id !== id);
      return {
        todos: updatedTodos,
      }
    },() => {
      this.updateLocalStorage();
    });
  };

  render() {
    return (
        <div className="App">

          <div className="App-container">
            <TodoList
                todos={this.state.todos}
                removeDate={this.removeDate}
                updateDate={this.updateDate}
            />
          </div>

        </div>
    )
  }
}

export default App;
