import React from 'react';
import './App.css';
//import { Component } from 'react';
import axios from 'axios';
import { CardList } from './components/card-list/card-list.component';
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
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
  }
}

export default App;
