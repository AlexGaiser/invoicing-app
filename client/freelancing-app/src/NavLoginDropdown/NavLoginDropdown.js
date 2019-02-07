
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginPanel from '../Login/Login';
import './NavLoginDropdown-styles.css'

import {Navbar, Nav, NavDropdown, Form, FormControl, Dropdown,SplitButton,ButtonToolbar,DropdownButton } from 'react-bootstrap'








const NavLoginDropdown = (props) => {


    return (

      <React.Fragment>

        <div class="login-dropdown dropdown mr-4">
          <button class="btn btn-primary dropdown-toggle login-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Login
          </button>
          <div class="dropdown-menu dropdown-menu-right p-4" aria-labelledby="dropdownMenuButton">
            <LoginPanel />
          </div>
        </div>

      </React.Fragment>
    )


}





export default NavLoginDropdown;
