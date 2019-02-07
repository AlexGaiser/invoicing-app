import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {Jumbotron, Container, Col, Row, } from 'react-bootstrap';


import './Header-styles.css';






const Header = (props) => {


    return (

      <React.Fragment>
        <Jumbotron className="Hero-One mb-0 rounded-0">
          <Container>
            <Row>
              <Col xs={12} md={12} lg={6}>

              </Col>
            </Row>
          </Container>
          <h1 className="display-2 font-weight-bold">This is our App...</h1>
          <p className="hero-txt-one lead">
            Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be?
          </p>

            <button type="button" class="btn btn-lg btn-outline-light">Learn More</button>

        </Jumbotron>
      </React.Fragment>
    )


}





export default Header;
