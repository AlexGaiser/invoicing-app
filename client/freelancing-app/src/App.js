import './App.css';
import React, { Component } from 'react';
import Stopwatch from './Main/Stopwatch'
import InvoiceForm from './Main/InvoiceForm'
import RateForm from './Main/RateForm'
import Moment from 'moment'
import MainInvoice from './userpg/MainInvoice'
import ListContainer from './userpg/ListContainer'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import User from './User';
import Axios from 'axios'
import logo from './logo.svg';

import MyModalWithGrid from './InvoiceModal/InvoiceModal'
import RegistrationModal from './RegistrationModal/RegistrationModal'
import Modal from 'react-bootstrap/Modal'


import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupDropdown,
  Input,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";



class App extends Component {
  constructor() {
    super();
    this.state = {
      time: "00:00",
      root: "pending",
      button1: "",
      invoiceData: 'invoicedata',
      invoices: "pending",
      button1: "",
      timerSet: false,
      timerStarted: false,
      modalShow:false
    };
  }
  createAuthHeader = ()=>{
      const token = localStorage.getItem('token')
      return {
        headers: {
          'Authorization': "bearer " + token
        }
      };
    }


  componentDidMount = async () => {
    // localStorage.setItem('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJKYXNvbkdhaXNlciIsIm5hbWUiOiJKYXNvbiBHYWlzZXIiLCJpYXQiOjE1NDk0MTUxMzh9.4sjp6RsuacvigP8ULSzD2m-Z26WVqsx7yaw2ir2M7iM');
    console.log("running");
    const response = await Axios.get("/main");
    setInterval(this.setTime, 500);
    this.setState({
      root: response.data.message
    });
  };
  stopWatch = stopwatch => {};

  setTime = () => {
    const time = new Date();
    this.setState({
      time: time.toLocaleTimeString(),
      seconds: time.getTime()
    });
  };

  setTimeStart = () => {
    console.log(this.state.seconds);
    this.setState({
      timeStart: this.state.seconds,
      timerSet: true
    });
  };

  stopTime = () => {
    this.setState({
      finalTime: this.state.timeStart,
      timeStart: 0,
      timerSet: false
    });
  };
  resetTime = () => {
    this.setState({
      finalTime: 0,
      timeStart: 0,
      timerSet: false
    });
  };


  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleClick = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  sendData = async (data)=>{
    // const token = localStorage.getItem('token')
    // const header = {
    //   headers:{'Authorization':  "bearer " +token}
    // }
    console.log(data);
    const header = this.createAuthHeader()
    // localStorage.setItem('authorization', header)
    const response =  await Axios.post('/records', data, header)
    console.log(response.data);

  }



  liftState = (key, value) => {
    console.log(key)
    console.log(value)
    this.setState({[key]:value})
  };

  render() {
    let modalClose = () => this.setState({modalShow:false});
    console.log(this.state.invoiceData)
    return (

      <div className="App">

        <header className="App-header">
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="app-container">
                  <div className="timerClock">
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
                </div>

                <h1 className="appTitle">{this.state.dropdownRate}</h1>
                <RateForm className="RateForm" handleChange={this.handleChange}/>
                <div>
                  <InvoiceForm
                    timerValue={this.state.timerValue}
                    liftState={this.liftState}
                    handleChange={this.handleChange}
                    sendData={this.sendData}
                    invoiceData={this.state.invoiceData}
                    timerValue={this.state.timerValue}
                    liftState={this.liftState}
                    jobtitle={this.state.jobtitle}
                    rate={this.state.rate}
                    name={this.state.name}
                    comments={this.state.comments}
                    handleChange={this.handleChange}
                    sendData={this.sendData}
                    show={this.state.modalShow} onHide={modalClose} />
                  />
                </div>
              </div>
            </div>
          </div>
          <Button variant="primary"
                  onClick={() => this.setState({ modalShow:true })}
                >
                Click Here to preview!
                </Button>

<<<<<<< HEAD
                <MyModalWithGrid
                invoiceData={this.state.invoiceData}

                timerValue={this.state.timerValue}
                liftState={this.liftState}
                jobtitle={this.state.jobtitle}
                rate={this.state.rate}
                name={this.state.name}
                comments={this.state.comments}
                handleChange={this.handleChange}
                sendData={this.sendData}
                show={this.state.modalShow} onHide={modalClose} />
=======
 
>>>>>>> OHMAHGAD

        </header>
      </div>
    );
  }
}

export default App;
