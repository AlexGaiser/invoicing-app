import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './NavBar-style.css'






const NavBar = (props) => {


    return (

      <div>
          <div className="navbar navbar-default">
              <div className="container">
                  <div className="navbar-header pull-left">
                      <ul className="nav navbar-nav">
                          <li className="active"><Link to="/">Home<span className="sr-only">(current)</span></Link></li>
                      </ul>
                  </div>

                  <div className="navbar-header">
                      <ul className="nav navbar-nav">
                          <li><Link to="/userProfile">Profile<span className="sr-only">(current)</span></Link></li>
                      </ul>
                  </div>

                  <div className="navbar-header">
                      <ul className="nav navbar-nav">
                          <li><Link to="/InvoiceGenerator">Invoice Generator<span className="sr-only">(current)</span></Link></li>
                      </ul>
                  </div>
              </div>
          </div>

      </div>

    )


}





export default NavBar;
