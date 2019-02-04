import React from "react"
import './App.css';
import Axios from 'axios';


class ListItem extends React.Component{
    constructor(){
        super()
    }

    async componentDidMount(){
        const response = await Axios.get('/records')
    }

    render(){
        return(records.map((invoice) => {
                return(
                <div>
                  <div className = "list-info">
                      <h1 key = {invoice.records.id}>{invoice.records.title}</h1>
                      <h3 key = {invoice.records.id}>{Client.records.Client_name}{Invoice.date}</h3>
                  </div>	
              </div>)
        })
              
        )
    }

}

export default ListItem
