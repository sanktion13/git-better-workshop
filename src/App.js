import React, { Component } from 'react';
import logo from './logo.svg';
import GovernmentFixer from './GovernmentFixer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <GovernmentFixer size="municipal" />
        </header>
      </div>
    );
  }
}

export default App;
