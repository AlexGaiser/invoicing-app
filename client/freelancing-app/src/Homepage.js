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



import Axios from 'axios'
import logo from './logo.svg';
import './App.css';

class Homepage extends Component{
    constructor(){
        super()
        }
    


    render(){
        return(
            <Router>
            <React.Fragment>
              <Link to="/userProfile">User Invoices</Link>
              <Link to="InvoiceGenerator">Invoice Generator</Link>
  
              {/* <a href ='./user.html'>User Invoices</a> */}
              <Route path='/userProfile' component={ User } />
              <Route path='/InvoiceGenerator' component={ App } />
            </React.Fragment>
  
          </Router>
         
        )
    }
}


export default Homepage