import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('http://the0sprint.herokuapp.com/api/medidas')
    .then(res => {
      return res.json()
    })
    .then(recurso => {
      console.log(recurso);
      this.setState({
        isLoaded: true,
        items: recurso
      })
      
    })
  }
  render() {
    var { isLoaded, items } = this.state;
    if(!isLoaded) {
      return <div>Loading...</div>
    }
    else{
      return (
        <div>
          {JSON.stringify(items.medidas)}
        </div>
      )
    }
  }

}

export default App;
