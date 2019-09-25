import React, {Component} from 'react';

import './css/reset.min.css';
import './css/App.css';

import TodoList from './components/TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
        <div className="App">

          <div className="App-container">
            <TodoList />
          </div>

        </div>
    )
  }
}

export default App;
