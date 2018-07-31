import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Main from './Main';

class App extends Component {

  constructor(props){
      super(props)
      this.state = {
          user: null
      }
  }

  handleUser(u){
      this.setState({user: u})
  }

  render() {
    return (
      <div className="App">
        <Navbar user = {this.state.user}/>
        <Main newUser={this.handleUser.bind(this)}/>
      </div>
    );
  }
}

export default App;
