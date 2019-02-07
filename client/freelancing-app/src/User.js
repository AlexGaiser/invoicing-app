import React, { Component } from 'react';
import Stopwatch from './Main/Stopwatch'
import InvoiceForm from './Main/InvoiceForm'
import RateForm from './Main/RateForm'
import { Button } from 'reactstrap';
import Moment from 'moment'
import MainInvoice from './userpg/MainInvoice'
import ListContainer from './userpg/ListContainer'
import ListItem from './userpg/ListItem'
import Axios from 'axios'
import logo from './logo.svg';
import './App.css';

class User extends Component {
  constructor(props) {
      super(props);
      this.state = {isLoaded:false,
        invoiceClicked:false
        }
  }

  componentDidMount = ()=>{
    this.getData()
  }
  createAuthHeader = ()=>{
    const token = localStorage.getItem('token')
    return {
      headers: {
        'Authorization': "bearer " + token
      }
    };
  }

  getData = async()=>{
     const header = this.createAuthHeader()

      const response = await Axios.get(`/records/${localStorage.getItem('id')}`, header)
 
      const userInfo = response.data.userInfo
      this.setState({invoiceDefault:userInfo.invoices[0]})
      
      const listInvoices = response.data.userInfo.invoices.map((invoice)=>{
        return <ListItem
            invoice={invoice} 
            key={invoice.id}
            id={invoice.id}
            renderMainInvoice={()=>this.renderMainInvoice(invoice)}
            deleteInvoice={()=>this.deleteInvoice(invoice)}
            updateInvoice={()=>this.updateInvoice(invoice)}

            />
      })
      this.setState({
          userInfo:userInfo,
          listItems: listInvoices,
          isLoaded:true
      })
  }

  deleteInvoice = async(invoice)=>{
    const header = this.createAuthHeader()
    this.setState((prevState) => {
      let listItems = prevState.listItems.filter((item)=>item.props.id!==invoice.id)
      return {listItems: listItems}
    })
    await Axios.delete(`/invoice/${invoice.id}`, header)
    this.renderMainInvoice(this.state.listItems)
  }

  updateInvoice = async(invoice)=>{
      const data = {
        "title": "Logo Redesign",
        "invoice_number": "1",
        "date": "2019-01-01T05:00:00.000Z",
        "description": "Created new branding strategy for client \"Google Corporation\" and redefined brand identity.",
        "extra_details": "Client also wanted a brand manual created",
        "logged_time": "08:20:10",
        "rate": 200.03,
        "extra_fees": 30,
        "total_amount": 1840.03,
        "created_at": "2019-02-06T15:58:55.301Z",
        "updated_at": "2019-02-06T15:58:55.317Z",
        "user_id": 1
    }
      
      
      const header = this.createAuthHeader()
      const response =  await Axios.put(`/invoice/${invoice.id}`, data, header)
      // const newList = await Axios.get('/records')
      
      
      alert('invoice updated')

    }

  renderMainInvoice = async (invoice)=>{
    const header = this.createAuthHeader() 
    const response = await Axios.get(`/invoice/${invoice.id}`, header)
    this.setState({
      invoiceInfo:response.data.invoice,
      invoiceClicked:true
    })  
  }
  
  render() {
      let invoiceDisplayed = this.state.invoiceClicked && this.state.invoiceInfo ? this.state.invoiceInfo : this.state.invoiceDefault
      return (
        <div className="farthest-user-background">
        <div className="half-background">
          <div className="user-background">
            <div className="user-page-wrapper">
                <div>
                    <h1 className= "your-invoices">Your Invoices</h1>
                    <ListContainer 
                        listItems={this.state.listItems}
                        deleteData={this.deleteData}
                    />
                </div>
                <MainInvoice
                  invoiceDisplayed={invoiceDisplayed}
                  isLoaded={this.state.isLoaded}
                />
            </div>
          </div>
        </div>
        </div>
       );
  }
}

export default User;