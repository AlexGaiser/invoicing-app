import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginPanel from '../Login/Login';
import LogoutButton from '../LogoutButton/LogoutButton'

import {Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'

import './NavBar-style.css'






const NavBar = (props) => {


    return (

      <React.Fragment>
          <Navbar bg="light" expand="lg" sticky='top'>
            <Navbar.Brand href="Header">InvoiceApp</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/Header">Home</Nav.Link>
                <Nav.Link href="/userProfile">Profile</Nav.Link>
                <Nav.Link href="/InvoiceGenerator">Invoice Generator</Nav.Link>
              </Nav>
              <LoginPanel />
              <LogoutButton />
            </Navbar.Collapse>
          </Navbar>
      </React.Fragment>
    )


}





export default NavBar;
