import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';

import './Login-styles.css'


const LoginPanel = (props) => {

  return (
    <React.Fragment>
      <Form onSubmit={()=>alert('form submitted')}inline className="">
        <Form.Control type="text" placeholder="Username" className="mr-sm-2" />
        <Form.Control type="text" placeholder="Password" className="mr-sm-2" />
        <Button type="submit" className="" variant="outline-success">LOGIN</Button>
      </Form>
    </React.Fragment>
  )

}

export default LoginPanel;
