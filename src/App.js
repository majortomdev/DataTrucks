import React, { Component } from 'react';
//import logo from './logo.svg';
import ArraysComponent from './components/structures/ArraysComponent';
import LinkedListComponent from './components/structures/LinkedListComponent';
import QueueComponent from './components/structures/QueueComponent';
import './App.css';

class App extends Component {
  render() {
    return ( 
        <div className="App">
        <p>This is the place to come if you want your data trucked</p>
        <ArraysComponent></ArraysComponent>
        <LinkedListComponent></LinkedListComponent>
        <QueueComponent></QueueComponent>
      </div>
    );
  }
}

export default App;// ArraysComponent;
