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
      isLoaded:false,
      time:'00:00',
      root: 'pending',
      invoices: 'pending',
      button1:'', 
      timerSet: false
    }
  }
  setTime = ()=> {
    const time = new Date()
    this.setState({
      time:time.toLocaleTimeString(),
      seconds:time.getTime()
    })
  }

  setTimeStart = ()=>{
    console.log(this.state.seconds);
    this.setState({
       timeStart:this.state.seconds,
       timerSet: true
      })
  }
  
  stopTime = ()=>{
    this.setState({
      finalTime:this.state.timeStart,
      timeStart:0,
      timerSet:false
    })
  }
  resetTime = ()=>{
    this.setState({
      finalTime:0,
      timeStart:0,
      timerSet:false
    })
  }

  componentDidMount =  async ()=>{
    console.log('running')
    const response = await Axios.get('/main')
    const invoices = await Axios.get('/records')
    console.log(invoices);
    setInterval(this.setTime, 100)    
    this.setState({
      root:response.data.message,
      invoices: invoices.data.records[0].title, 
      isLoaded:true
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

    alert(`${formData.service} - ${formData.rate}` )
    }
   
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
          <Stopwatch
            time={this.state.time}
            seconds={this.state.seconds}
            click={this.handleClick}
            timeStart={this.state.timeStart}
            timerSet={this.state.timerSet}
            setTimeStart={this.setTimeStart}
            stopTime={this.stopTime}
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
            {this.state.isLoaded && this.state.invoices}<br/>
           {this.state.root}
          </a>
        </header>
      </div>
    );
  }
}

export default App;