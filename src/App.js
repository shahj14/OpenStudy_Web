import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Signup from './Signup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Signup />
      </div>
    );
  }
}

export default App;
