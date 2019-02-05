import React, { Component } from 'react';
import Stopwatch from './Main/Stopwatch'
import InvoiceForm from './Main/InvoiceForm'
import RateForm from './Main/RateForm'
import { Button } from 'reactstrap';
import Moment from 'moment'
import MainInvoice from './userpg/MainInvoice'
import ListContainer from './userpg/ListContainer'


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
      button1:'',
      invoices: 'pending',
      button1:'', 
      timerSet: false,
      timerStarted:false
    }
  }
  
  stopWatch=(stopwatch)=>{

  }


  setTime = ()=> {
    const elapsedTime = Moment.duration((Moment().diff(this.state.timeStart)))
    // console.log('running time set: ');
    this.setState({
      time: Moment(),
      elapsedTime: elapsedTime
    })
    // console.log(this.state.time)
  }

  setTimeStart = ()=>{
    const timeStart  = Moment()
    // let elapsedTime = Moment.duration(Moment().diff(startTime))
    // elapsedTime.asSeconds()
    // console.log(elapsedTime);
    // console.log(elapsedTime.asSeconds());
    this.setState({
       timeStart: timeStart,
       timerSet:true
    })
  }

  stopTime = ()=>{
    this.setState({
      finalTime:this.state.timerSet,
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
    setInterval(this.setTime, 500)
    const invoices = await Axios.get('/records')
    console.log(invoices);
    setInterval(this.setTime, 1000)    

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

  sendData = async (data)=>{
    console.log(data);
    await Axios.post('/records', data)
    }
    

  liftState = (name,state)=>{
    this.setState({[name]:state})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
          <Stopwatch
            liftState={this.liftState}
            time={this.state.time}
            elapsedTime={this.state.elapsedTime}
            // seconds={this.state.seconds}
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
            timerValue={this.state.timerValue}
            liftState={this.liftState}
            jobtitle={this.state.jobtitle}
            rate={this.state.rate}
            name={this.state.name}
            comments={this.state.comments}
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
          <RateForm
            className="RateForm"
             />
        </header>
        <React.Fragment><ListContainer /></React.Fragment>
        <React.Fragment>
          <MainInvoice />
        </React.Fragment>
      </div>
    );
  }
}

export default App;
