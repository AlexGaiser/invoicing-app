import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Axios from 'axios'


class ListItemModal extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    
    
    this.updateInvoiceData()
};
createAuthHeader = () => {
  const token = localStorage.getItem('token')
  return {
    headers: {
      'Authorization': "bearer " + token
    }
  }
};

onSubmit = ()=>{
  this.updateModal()
  this.props.onHide()
  window.location.reload()
}

componentDidMount=()=>{
  this.updateInvoiceData()
}

updateInvoiceData =()=>{
  this.setState({updateData: {
        // Need to add Client Email, User Email, User Phone Number, User Address
        // Job Information
        title: this.state.jobTitle,
        invoice_number: this.state.invoice_number,
        // date: moment(),
        description:this.state.description,
        extra_details: this.state.extra_details,
        // logged_time: moment().format('hh:mm:ss a'),
        //Billing Information

        billable_hours: this.state.billable_hours,
        rate:this.state.rate,
        hourly_earnings:this.state.earnings,
        extra_fees:parseInt(this.state.extra_fees).toFixed(2),// extra fees need an input field and they can be added to the "total_amount"
        total_amount:this.state.total_amount, //+extra_fees
        // client information
        client_name:this.state.name,
        client_email: this.state.client_email,
        client_phone: this.state.client_phone,
        client_address:this.state.client_address,
        client_city:this.state.client_city,
        client_zip: parseInt(this.state.client_zip),
        user_id: parseInt(localStorage.getItem('id')),
    }
  })
}

  updateModal = async ()=>{
    console.log(this.state.updateData)
    const header = this.createAuthHeader()
    alert(this.state.updateData.title)
    
    const response = await Axios.put(`/invoice/${this.props.id}`, this.state.updateData, header)
    console.log(response);
  }

  render () {
    const invoice = this.props.invoiceData
    return ( 
      <Modal
      {...this.props}
      aria-labelledby="contained-modal-title-vcenter"
      size="lg"
      centered
      >
            <h4>{this.props.id}</h4>

      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <input className="form-control" name="jobTitle" defaultValue={this.props.modalShow && invoice.title} type="text" id="modal-title" onChange={this.handleChange} />
        </Modal.Title>
      </Modal.Header>
      <Modal.Header>
        <Modal.Title >
        {/* <input className="form-control" name="" defaultValue={this.props.modalShow && invoice.} type="text" id="modal-title" onChange={this.handleChange} /> */}

        <h1 id="modal-name">{this.props.name}</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <p className="modal-description"><span className="description-bold">Description:   </span>{this.props.comments}</p>
              <input className="form-control" name="jobTitle" defaultValue={this.props.modalShow && invoice.title} type="text" id="modal-title" onChange={this.handleChange} />
            
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
        <button className="btn-success btn" onClick={this.onSubmit}>Submit</button>
         
        <Button className="btn-secondary" onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
      </Modal>


    )
  }

}

export default ListItemModal;
