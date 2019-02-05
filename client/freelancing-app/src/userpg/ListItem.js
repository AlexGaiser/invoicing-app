import React from "react"
import Axios from 'axios';


 const ListItem =(props)=>{
        return(
                <div >
                  <div className = "list-info">
                      <h1>{props.invoice.title}</h1>
                      <h3>{props.invoice.id}</h3><h2>{props.invoice.description}</h2>
                    <button onClick={props.renderMainInvoice}>Click</button>
                  </div>	
        </div>)
    }

export default ListItem
