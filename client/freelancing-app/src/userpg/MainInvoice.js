import React from "react"
import Axios from 'axios' 

class MainInvoice extends React.Component{
    constructor(){
        super()
    }

    componentDidMount(){

    }

    render(){
        return(
            <div className="invoice-container">
                <div>
                    <h1 className="invoice-title">Google Logo Redesign</h1>
                    <h3 className="invoice-number">{invoice.invoice_Number}</h3>
                </div>
            </div>
        )
    }
}
export default MainInvoice