import React from "react"
import Axios from 'axios' 

class MainInvoice extends React.Component{
    constructor(){
        super()
        this.state={
            information:[],
            isLoaded:false
        }
    }
    
    componentDidMount= async () => {
        const response = await Axios.get('/records')
        console.log(response.data);
        this.setState({
          information: response.data,
          information: response.data.records,
          isLoaded:true
        })
        console.log(response.data.records[0].title)
    }

    render(){
        return(
            <div className="invoice-container">
                <div>
                    {/* <h1 className="invoice-title">Google Logo Redesign</h1> */}
                    <h3 className="invoice-number">{this.state.isLoaded && this.state.information[0].title}</h3>
                </div>
            </div>
        )
    }
}
export default MainInvoice