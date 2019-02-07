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