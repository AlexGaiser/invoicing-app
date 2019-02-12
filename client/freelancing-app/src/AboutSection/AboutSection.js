import React from 'react';
import {Container, Col, Row, } from 'react-bootstrap';

import './AboutSection-styles.css'
import imageAbout from './Images/about-section.jpeg'


const AboutSection = (props) => {


  return (
      <React.Fragment>
      <Container fluid="true" className="AboutSection">
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
          <img className="img-responsive" src={imageAbout} />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} className="about-bg">
            <div className="about-txt-wrap">
              <h2 className="display-4 font-weight-bold text-left">So whats the big deal?</h2>
              <p className="about-text-one lead text-left">He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.</p>
            </div>
          </Col>
        </Row>
        <Row>

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
