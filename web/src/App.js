import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items = [],
      isLoaded: true,
      items: json
    }
  }

  render() {
    var { isLoaded, items } = this.state;

    if(!isLoaded) {
      return <div>Loading...</div>
    }
    else{
      return (
        <div className="App">
          <ul>
            
          </ul>
        </div>

      )
    }
  }

}

export default App;
