import { Component } from 'react';

import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchField } from './components/search-field/search-field.component';

class App extends Component {
  constructor() {
    super();
    console.log('this', this);
    this.state = {
      monsters: [],
      searchField: '',
    };
    this.handleClick2 = this.handleClick1.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
    console.log('event', e.target.value);
  };

  handleClick() {
    console.log('Button1 clicked');
  }

  handleClick1 = () => {
    console.log(this.state);
  };

  handleClick3 = () => {
    console.log('Button3 clicked');
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="App">
        <button onClick={this.handleClick()}>CLick1</button>
        <button onClick={this.handleClick1}>CLick2</button>
        <button onClick={this.handleClick2}>CLick3</button>
        <button onClick={this.handleClick3}>CLick4</button>
        <SearchField
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
