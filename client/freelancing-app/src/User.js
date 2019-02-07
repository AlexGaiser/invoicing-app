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
 
      console.log(response.data)
      const userInfo = response.data.userInfo
      console.log(userInfo.invoices[0])
      this.setState({invoiceDefault:userInfo.invoices[0]})
      
      const listInvoices = response.data.userInfo.invoices.map((invoice)=>{
        return <ListItem
            invoice={invoice} 
            key={invoice.id}
            id={invoice.id}
            renderMainInvoice={()=>this.renderMainInvoice(invoice)}
            />
      })
      this.setState({
          userInfo:userInfo,
          listItems: listInvoices,
          isLoaded:true
      })
  }

  renderMainInvoice = async (invoice)=>{
    const header = this.createAuthHeader() 
    const response = await Axios.get(`/invoice/${invoice.id}`, header)
    console.log(invoice.id);
    console.log(response.data.invoice)
    this.setState({
      invoiceInfo:response.data.invoice,
      invoiceClicked:true
    })  
      

  }

  
  render() {
      const invoiceDisplayed = this.state.invoiceClicked ? this.state.invoiceInfo : this.state.invoiceDefault
      console.log(this.state.defaultInvoice); 
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