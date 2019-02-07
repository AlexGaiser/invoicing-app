import React from 'react';
import {Container, Col, Row, } from 'react-bootstrap';

import './AboutSection-styles.css'


const AboutSection = (props) => {
  return (
      <React.Fragment>
      <Container fluid="true" className="AboutSection">
        <Row>
          <Col></Col>
          <Col xs={6} sm={6} md={12} lg={12}>
            <h2 className="display-4 font-weight-bold text-center">So whats the big deal?</h2>
          </Col>
          <Col></Col>
        </Row>
        <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <p className="about-text-one lead text-center">He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.</p>
        </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
        </Container>
      </React.Fragment>
  )
}

export default AboutSection;
