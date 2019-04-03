import React, { Component } from 'react';
import './App.css';
import MenuContainer from './components/MenuContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <MenuContainer/>
      </div>
    );
  }
}

export default App;
