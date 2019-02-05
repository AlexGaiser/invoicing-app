import React from "react"
import Axios from 'axios';


 const ListItem =(props)=>{
        return(
                <div className = "list-item-wrapper" >
                  <div onClick={props.renderMainInvoice} className = "list-info">
                      <h1 className = "item-title">{props.invoice.title}</h1>
                      <h3 className = "item-id">Invoice ID:{props.invoice.id}</h3>
                      <h2 className = "item-date">Date submitted: {props.invoice.date}</h2>
                    <button className ="item-edit-delete-btn" onClick={props.renderMainInvoice}>Edit</button>
                    <button className ="item-edit-delete-btn" onClick={props.renderMainInvoice} onClick={props.renderMainInvoice}>Delete</button>
                  </div>	
        </div>)
    }

export default ListItem
