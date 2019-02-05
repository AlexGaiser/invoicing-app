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
import './App.css';
import MyModalWithGrid from './InvoiceModal/InvoiceModal'
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

      invoices: "pending",
      button1: "",
      timerSet: false,
      timerStarted: false,
      modalShow:false
    };
  }

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

  componentDidMount = async () => {
    console.log("running");
    const response = await Axios.get("/main");
    setInterval(this.setTime, 500);
    this.setState({
      root: response.data.message
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
    console.log(data);
    await Axios.post('/records', data)
    }


  liftState = (name, state) => {
    this.setState({ [name]: state });
  };

  render() {
    let modalClose = () => this.setState({modalShow:false});

    return (

      <div className="App">

        <header className="App-header">
          <div className="container">
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

                <h1 className="appTitle">Title</h1>
                <RateForm className="RateForm" />
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
              </div>
            </div>
          </div>
          <Button variant="primary"
                  onClick={() => this.setState({ modalShow:true })}
                >
                Click Here to see Modal!
                </Button>
                <MyModalWithGrid show={this.state.modalShow} onHide={modalClose} />

        </header>
      </div>
    );
  }
}

export default App;
