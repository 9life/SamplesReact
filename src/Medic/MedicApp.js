import React, { Component } from 'react';
import logo from './logo.svg';
import config from './config';
import '.MedicApp.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello World!
          </p>
        </header>
      </div>
    );
  }
}

export default App;