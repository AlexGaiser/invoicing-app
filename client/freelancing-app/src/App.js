import React, { Component } from "react";
import Stopwatch from "./Main/Stopwatch";
import InvoiceForm from "./Main/InvoiceForm";
import RateForm from "./Main/RateForm";

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

import Axios from "axios";
import logo from "./logo.svg";
import "./App.css";

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
      timerStarted: false
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

  sendData = event => {
    // event.preventDefault()
    const formData = {
      // timeElapsed:
      service: this.state.form1,
      rate: this.state.form2
      // comment:
    };

    alert(`${formData.service} - ${formData.rate}`);
  };

  liftState = (name, state) => {
    this.setState({ [name]: state });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header d-none">
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
                  {this.state.isLoaded && this.state.invoices}
                  <br />
                  {this.state.root}
                </a>

                <React.Fragment>
                  <ListContainer />
                </React.Fragment>
                <React.Fragment>
                  <MainInvoice />
                </React.Fragment>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;

