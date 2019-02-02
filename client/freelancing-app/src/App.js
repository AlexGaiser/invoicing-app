import React, { Component } from 'react';
import Axios from 'axios'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      root: 'pending'
    }

  }


  componentDidMount =  async ()=>{
    console.log('running')
    
    const response = await Axios.get('http://localhost:9000/')
    console.log(response)
    this.setState({
      root:response.data.message
    })
  
    
  }
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
           {this.state.root}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
