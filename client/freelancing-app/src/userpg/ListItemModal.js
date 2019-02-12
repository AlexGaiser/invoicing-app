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
  this.updateInvoiceData()
  alert('Update Submitted')
  this.updateModal()
  this.props.onHide()
  window.location.reload()
}

componentDidMount=()=>{
  this.updateInvoiceData()

  setInterval(this.updateInvoiceData, 100)
}

updateInvoiceData =()=>{
  const updateData= {
    title: this.state.jobTitle,
    invoice_number: this.state.invoice_number,
    // date: moment(),
    description:this.state.description,
    extra_details: this.state.extra_details,
    // logged_time: moment().format('hh:mm:ss a'),
    //Billing Information

    billable_hours: this.state.billable_hours,
    rate: this.state.rate,
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
  
  this.setState({updateData: updateData})
}

  updateModal = async ()=>{
    console.log(this.state.updateData)
    const header = this.createAuthHeader()
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
          <p>Job Title:</p>
          <input className="form-control" name="jobTitle" defaultValue={this.props.modalShow && invoice.title} type="text" id="modal-title" onChange={this.handleChange} />
          <p>Client Name:</p>
          <input className="form-control" name="client_name" defaultValue={this.props.modalShow && invoice.client_name} type="text" id="modal-title" onChange={this.handleChange} />
          <p>Client Email:</p>
          <input className="form-control" name="client_email" defaultValue={this.props.modalShow && invoice.client_email} type="text" id="modal-title" onChange={this.handleChange} />
          <p>Client Phone Number</p>
          <input className="form-control" name="client_phone" defaultValue={this.props.modalShow && invoice.client_phone} type="text" id="modal-title" onChange={this.handleChange} />
          <p>Address</p>
          <input className="form-control" name="client_address" defaultValue={this.props.modalShow && invoice.client_address} type="text" id="modal-title" onChange={this.handleChange} />
          <p>City</p>
          <input className="form-control" name="client_city" defaultValue={this.props.modalShow && invoice.client_city} type="text" id="modal-title" onChange={this.handleChange} />
          <p>Zip Code</p>
          <input className="form-control" name="client_zip" defaultValue={this.props.modalShow && invoice.client_zip} type="text" id="modal-title" onChange={this.handleChange} />

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
              <textarea className="form-control" name="description" defaultValue={this.props.modalShow && invoice.description} type="text" id="modal-title" onChange={this.handleChange} />
              <p className="modal-description"><span className="description-bold">Extra Details:   </span>{this.props.comments}</p>              
              <textarea className="form-control" name="extra_details" defaultValue={this.props.modalShow && invoice.extra_details} type="text" id="modal-title" onChange={this.handleChange} />

            </Col>
          </Row>
        </Container>
        <Row className="show-grid">
            <Col xs={12} md={2} className="text-right">
            <p>{this.state.rate}</p>
            {/* <input name="rate" defaultValue={this.props.modalShow && invoice.rate} type="number" id="modal-title" onChange={this.handleChange} /> */}
             {/* <p><span>x</span>Total Time: {this.props.timerValue}</p> */}

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
