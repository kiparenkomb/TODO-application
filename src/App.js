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

  render() {
    return (
        <div className="App">

          <div className="App-container">
            <TodoList
                todos={this.state.todos}
            />
          </div>

        </div>
    )
  }
}

export default App;
