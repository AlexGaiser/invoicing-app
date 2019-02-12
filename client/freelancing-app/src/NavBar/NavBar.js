import './NavBar-style.css'
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginPanel from '../Login/Login';
import LogoutButton from '../LogoutButton/LogoutButton'
import NavLoginDropdown from '../NavLoginDropdown/NavLoginDropdown'
import NavRegisterDropdown from '../NavRegisterDropdown/NavRegisterDropdown'

import {Navbar, Nav, NavDropdown, Form, FormControl, Dropdown,SplitButton,ButtonToolbar,DropdownButton } from 'react-bootstrap'





const NavBar = (props) => {

    const logout=(event)=>{
        event.preventDefault()
        localStorage.setItem('id','null')
        localStorage.setItem('token','null')
        window.location.reload()
    }
    return (

      <React.Fragment>
          <Navbar className="cool-nav" expand="lg" sticky='top'>
            <Navbar.Brand href="/"><span className="font-weight-bold">ENVOICE</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav main-nav">
              <Nav className="ml-auto">
                <div className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </div>
                <div className="nav-item">
                  <Link className="nav-link" to="/userProfile">Profile</Link>
                </div>
                <div className="nav-item">
                  <Link className="nav-link" to="/InvoiceGenerator">Invoice Generator</Link>
                </div>
              </Nav>

              <NavLoginDropdown />
              <Button onClick={logout}>Logout</Button>

            </Navbar.Collapse>
          </Navbar>
      </React.Fragment>
    )


}





export default NavBar;
