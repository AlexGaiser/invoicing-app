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
      this.state = {isLoaded:false}
  }

  getData = async()=>{
      const response = await Axios.get('/records/1')
      console.log(response.data)
      const userInfo = response.data.userInfo
      const listInvoices = response.data.userInfo.invoices.map((invoice)=>{
        return <ListItem
            invoice={invoice} 
            key={invoice.id}
            id={invoice.id}
            renderMainInvoice={this.renderMainInvoice}
            />
      })
      this.setState({
          userInfo:userInfo,
          listItems: listInvoices,
          isLoaded:true
      })
  }
  renderMainInvoice = async (invoice)=>{
    alert('invoice selected')
    // const response = await Axios.get(`/records/${invoice.id}`) 
  }

  
  componentDidMount =()=>{
      this.getData()
  }

  render() { 
      return ( 
        <div className="farthest-user-background">
        <div className="half-background">
          <div className="user-background">
            <div className="user-page-wrapper">
                <ListContainer 
                    listItems={this.state.listItems}
                />
                <MainInvoice />
            </div>
          </div>
        </div>
        </div>
       );
  }
}

export default User;