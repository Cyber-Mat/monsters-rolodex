import React from 'react';
import './App.css';

import axios from 'axios';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
    //this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    //fetch('https://jsonplaceholder.typicode.com/users').then((response) => console.log(response));
    const result = await axios('https://jsonplaceholder.typicode.com/users');
    const users = result.data;
    this.setState({ monsters: users });
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  /*
  handleChange(e) {
    this.setState({ searchField: e.target.value });
  }
  */

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='Search monster' handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
