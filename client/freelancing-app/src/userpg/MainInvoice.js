import React from "react"
import Axios from 'axios' 

class MainInvoice extends React.Component{
    constructor(){
        super()
        this.state={
            information:[],
            isLoading:false
        }
    }
    
    componentDidMount= async () => {
        const response = await Axios.get('/records')

        this.setState({
            information: response.data,
            isLoading: true
        })
        console.log(response.data.records[0].title)

    }

    render(){
        return(
            <div className="invoice-container">
                <div>
                    <h3 className="invoice-title">{this.state.isLoading && this.state.information.records[0].title}</h3>
                </div>
            </div>
        )
    }
}
export default MainInvoice