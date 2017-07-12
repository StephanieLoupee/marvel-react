import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/navigation/Navigation';
import Character from './containers/Character';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Character />
      </div>
    );
  }
}

export default App;
