import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import React, { Component } from 'react';
import './InvoiceModal.css'


class InvoiceModal extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount=()=>{
  // this.props.sendData()
  console.log(`${this.props.invoiceData} Invoice Data`)
}
  
  render () {
    return (
      <Modal
      {...this.props}
      aria-labelledby="contained-modal-title-vcenter"
      size="lg"
      centered
      >
            <h4>{this.props.invoiceData}</h4>

      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h1 id="modal-title">{this.props.invoiceData}</h1> 
        </Modal.Title>
      </Modal.Header>
      <Modal.Header>
        <Modal.Title >
        <h1 id="modal-name">{this.props.name}</h1> 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <p className="modal-description"><span className="description-bold">Description:   </span>{this.props.comments}</p>
            </Col>
          </Row>
        </Container>
        <Row className="show-grid">
            <Col xs={12} md={2} className="text-right">
              <p>Rate: ${this.props.rate}</p>
              <p><span>x</span>Total Time: {this.props.timerValue}</p>
            </Col>
          </Row>
      </Modal.Body>

      <Modal.Footer>
        <h1>Total:</h1>
      </Modal.Footer>
      <Modal.Footer>
        <Button onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
      </Modal>


    )
  }

}

export default InvoiceModal;
