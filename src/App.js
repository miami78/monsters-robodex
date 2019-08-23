import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(Response => Response.json())
      .then(users => this.setState({ monsters: users }));
  }
  render(){
    return(
      <div className="App">
        <CardList name='Miami'>
          {this.state.monsters.map(monster => (
              <h1 key= {monster.id}> {monster.name} </h1>
              ))}
        </CardList>
    </div>
    )
  }
}


export default App;
