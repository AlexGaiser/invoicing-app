
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginPanel from '../Login/Login';
import './NavRegisterDropdown-styles.css'

import {Navbar, Nav, NavDropdown, Form, FormControl, Dropdown,SplitButton,ButtonToolbar,DropdownButton } from 'react-bootstrap'








const NavRegisterDropdown = (props) => {


    return (

      <React.Fragment>
      <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle register-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Register
        </button>
        <div class="dropdown-menu dropdown-menu-right p-4" aria-labelledby="dropdownMenuButton">
          THIS LINK SHOULD OPEN MODAL to REGISTER
        </div>
      </div>
      </React.Fragment>
    )


}





export default NavRegisterDropdown;
