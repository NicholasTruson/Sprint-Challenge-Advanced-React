import React from 'react';

import './App.css';

import axios from 'axios';

import CardComp from './card';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
    };

  }
  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`)
      .then(res => this.setState(res))
  }
  render() {

    return (<CardComp data={this.state.data} />)

  }
}

export default App;
