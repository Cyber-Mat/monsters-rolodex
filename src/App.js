import React from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
//import { Component } from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  async componentDidMount() {
    //fetch('https://jsonplaceholder.typicode.com/users').then((response) => console.log(response));
    const result = await axios('https://jsonplaceholder.typicode.com/users');
    const users = result.data;
    this.setState({ monsters: users });
  }
  render() {
    return (
      <div className='App'>
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
