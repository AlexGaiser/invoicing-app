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

class User extends Component {
    constructor(){
      super()
    }
    render() {
        return (
          <div className="App">
            <header className="App-header">
            <React.Fragment><ListContainer /></React.Fragment>
            <React.Fragment><MainInvoice /></React.Fragment>
            </header>
            <h1>Hello. This is the user invoice page</h1>
            <div><h3>User invoice list will go here</h3></div>
            <div className="main-invoice-container"><h3>Main invoice component will go here</h3></div>
       

          </div>
        )
        }
    }

export default User

