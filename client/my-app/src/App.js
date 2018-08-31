import React, { Component } from 'react';
// import logo from './logo.svg';
import Navbar from './Navbar'
import Home from './Home'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Home id="home"/>
      </div>
    );
  }
}

export default App;
