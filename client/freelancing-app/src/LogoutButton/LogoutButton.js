import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'


const LogoutButton = (props) => {
 return (
   <React.Fragment>
     <Form onSubmit={()=>alert('form submitted')}inline className="">
       <Button type="submit" className="" variant="outline-success">LOGOUT</Button>
     </Form>
   </React.Fragment>
 )
}


export default LogoutButton;
