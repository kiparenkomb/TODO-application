import React, {Component} from 'react';

import Header from '../Header';
import Filter from '../Filter';
import VisibleTodoList from '../../containers/VisibleTodoList';

import '../../css/reset.min.css';
import './style.css';

class App extends Component {
  render() {
    return (
        <div className="App">

          <Header />

          <div className="App-container">
            <Filter />
            <VisibleTodoList />
          </div>

        </div>
    )
  }
}

export default App;
