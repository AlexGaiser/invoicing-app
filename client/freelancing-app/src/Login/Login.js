import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Redirect}  from "react-router-dom"
import {Navbar, Nav, NavDropdown, Form, FormControl, ListGroup } from 'react-bootstrap';
import RegistrationModal from '../RegistrationModal/RegistrationModal'
import Modal from "react-bootstrap/Modal"


import './Login-styles.css'
import Axios from 'axios';


class LoginPanel extends Component {
  constructor(props) {
    super()
    this.state = {

      modalShow:false
    };
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
        alert('Logged in ')
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('id', response.data.id)

        this.setState({redirectInvoice:true})
        window.location.reload()

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

    let modalClose = () => this.setState({modalShow:false});
    if (this.state.redirectInvoice === true) {
      return <Redirect to='/InvoiceGenerator' />
    }
    return (


      <React.Fragment>

        <Form onSubmit={this.sendLoginInfo}inline className="login-form-wrap">
          <Form.Control name="username" type="text" placeholder="Username" className="mr-sm-2" onChange={this.handleChange}/>
          <Form.Control name="password" type="password" placeholder="Password" className="mr-sm-2" onChange={this.handleChange}/>
          <button type="submit" className="btn btn-primary btn-block" variant="outline-success">LOGIN</button>
        </Form>
        <div class="dropdown-divider"></div>
        <div className="container">
          <div className="row">
            <div className="col-12">
            <button className="btn btn-primary btn-sm" variant="primary"
                    onClick={() => this.setState({ modalShow:true })}
                  >
                  Register
                  </button>
                  <RegistrationModal

                  show={this.state.modalShow} onHide={modalClose}>

                  </RegistrationModal>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }

}

export default LoginPanel;
