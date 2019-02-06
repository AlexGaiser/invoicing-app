import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Redirect}  from "react-router-dom"
import {Navbar, Nav, NavDropdown, Form, FormControl, ListGroup } from 'react-bootstrap';

import './Login-styles.css'
import Axios from 'axios';


class LoginPanel extends Component {
  constructor(props) {
    super()
    this.state={

    }
  }
  componentDidMount=()=>{
    this.setState({redirectInvoice:false})
  }
  // createAuthHeader = ()=>{
  //   const token = localStorage.getItem('token')
  //   return {
  //     headers: {
  //       'Authorization': "bearer " + token
  //     }
  //   };
  // }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

 
  sendLoginInfo= async(event) =>{
      event.preventDefault()
      // const header = this.createAuthHeader()
      const credentials = {username:this.state.username, password: this.state.password}
      const response = await Axios.post('/login', credentials)
      if(response.data.token){
        alert('logged in ')
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('id', response.data.id)

        this.setState({redirectInvoice:true})        
        // window.location('/invoiceGenerator')
      }
      else{
        alert('invalid username or password')
        localStorage.setItem('token', 'null')
        localStorage.setItem('id', 'null')
      }
      
      
      console.log(credentials)
      console.log(response);
    }


  render(){
    if (this.state.redirectInvoice === true) {
      return <Redirect to='/InvoiceGenerator' />
    }
    return (
      
  
      <React.Fragment>

        <Form onSubmit={this.sendLoginInfo}inline className="">
          <Form.Control name="username" type="text" placeholder="Username" className="mr-sm-2" onChange={this.handleChange}/>
          <Form.Control name="password" type="text" placeholder="Password" className="mr-sm-2" onChange={this.handleChange}/>
          <Button type="submit" className="" variant="outline-success">LOGIN</Button>
        </Form>
      </React.Fragment>
    )
  }
  
}

export default LoginPanel;
