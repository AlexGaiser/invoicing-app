import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {Jumbotron, Container, Col, Row, } from 'react-bootstrap';

import './Header-styles.css';






const Header = (props) => {


    return (

      <React.Fragment>
        <Jumbotron className="Hero-One">
          <Container>
            <Row>
              <Col>

              </Col>
            </Row>
          </Container>
          <h1>This is our App...</h1>
          <p className="hero-txt-one">
            Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be?
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
      </React.Fragment>
    )


}





export default Header;
