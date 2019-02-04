import React, { Component } from 'react';
import Stopwatch from './Main/Stopwatch'
import InvoiceForm from './Main/InvoiceForm'

import Axios from 'axios'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      time:'00:00',
      root: 'pending',
      button1:''
    }
  }
  setTime = ()=> {
    const time = new Date()
    this.setState({time:time.toLocaleTimeString()})
  }
  
  
  componentDidMount =  async ()=>{
    console.log('running')
    const response = await Axios.get('/main')
    setInterval(this.setTime, 500)    
    this.setState({
      root:response.data.message
    })
  }
  
  handleChange = (event)=>{
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  handleClick = (event)=>{
    const {name, value} = event.target
    this.setState({[name]:value})
  }

  sendData = (event)=>{
    event.preventDefault()
    const formData = {
      // timeElapsed:
      service: this.state.form1,
      rate: this.state.form2,
      // comment: 
    }
    alert()
    }
   


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
          <Stopwatch
            time={this.state.time}
            click={this.handleClick}
          />
          </div>
          <h1>Title</h1>
          <div>
          <InvoiceForm
            form1={this.state.form1}
            form2={this.state.form2}
            handleChange={this.handleChange}
            sendData={this.sendData}
          />
          </div>
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