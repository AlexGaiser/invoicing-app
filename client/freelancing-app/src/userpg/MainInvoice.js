import React from "react"
import Axios from 'axios' 

class MainInvoice extends React.Component{
    constructor(){
        super()
        this.state={
            information:[]
        }
    }
    
    componentDidMount= async () => {
        const response = await Axios.get('/records')

        this.setState({
            information: response.data
        })
    }

    render(){
        return(
            <div className="invoice-container">
                <div>
                    <h1 className="invoice-title">Google Logo Redesign</h1>
                    <h3 className="invoice-number">{this.state.information}</h3>
                </div>
            </div>
        )
    }
}
export default MainInvoice