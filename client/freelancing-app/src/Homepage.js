import React, { Component } from 'react';
import Stopwatch from './Main/Stopwatch'
import InvoiceForm from './Main/InvoiceForm'
import RateForm from './Main/RateForm'
import { Button } from 'reactstrap';
import Moment from 'moment'
import MainInvoice from './userpg/MainInvoice'
import ListContainer from './userpg/ListContainer'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import User from './User';
import App from './App';

import NavBar from './NavBar/NavBar';
import Header from './Header/Header';
import AboutSection from './AboutSection/AboutSection';

import Axios from 'axios'
import logo from './logo.svg';
import './App.css';

class Homepage extends Component{
    constructor(){
        super()
        }

    render(){
        return(
          <React.Fragment>
            {/* <Header /> */}

            <Router>
            <React.Fragment>
              <NavBar />

              {/*<Link to="/userProfile">User Invoices</Link>*/}
              {/*<Link to="InvoiceGenerator">Invoice Generator</Link>*/}

              {/* <a href ='./user.html'>User Invoices</a> */}
              
              <Route path='/Header' component={ Header } />
              <Route path='/userProfile' component={ User } />
              <Route path='/InvoiceGenerator' component={ App } />

            </React.Fragment>
          </Router>
          </React.Fragment>

        )
    }
}


export default Homepage
