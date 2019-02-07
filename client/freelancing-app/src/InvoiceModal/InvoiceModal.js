import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import React, { Component } from 'react';
import './InvoiceModal.css'


class InvoiceModalOne extends Component {
  render () {
    return (
      <Modal
      {...this.props}
      aria-labelledby="contained-modal-title-vcenter"
      size="lg"
      centered
      >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Title Goes Here
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row ClassName="show-grid">
            <Col xs={12} md={12}>
              <p>Invoice INSIDE 12 Grid Column... yes inside the modal</p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
      </Modal>


    )
  }

}

export default InvoiceModalOne;
