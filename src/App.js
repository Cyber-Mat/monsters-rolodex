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
  }

  async componentDidMount() {
    //fetch('https://jsonplaceholder.typicode.com/users').then((response) => console.log(response));
    const result = await axios('https://jsonplaceholder.typicode.com/users');
    const users = result.data;
    this.setState({ monsters: users });
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className='App'>
        <SearchBox placeholder='Search monster' handleChange={(e) => this.setState({ searchField: e.target.value })} />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
