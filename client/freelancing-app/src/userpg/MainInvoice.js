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
                    <div className="main-heading">
                        <h3 className= "main-title main-details" >{this.state.isLoaded && this.state.information[0].title}</h3>
                        <h3 className= "main-id main-details" >Invoice ID: {this.state.isLoaded && this.state.information[0].id}</h3>
                    </div>
                    <div className="main-line-1"></div>
                    <h3 className= "main-date main-details" >{this.state.isLoaded && this.state.information[0].date}</h3>
                    <h3 className= "main-description main-details" >{this.state.isLoaded && this.state.information[0].description}</h3>
                    <h3 className= "main-description main-details" >Details:{this.state.isLoaded && this.state.information[0].extra_details}</h3>
                    <h3 className= "main-description main-details" >Time Logged:{this.state.isLoaded && this.state.information[0].logged_time}</h3>
                    <div className="main-line-1"></div>
                    <h3 className= "main-description main-details" >Total Amount:{this.state.isLoaded && this.state.information[0].total_amount}</h3>

                    
                </div>
            </div>
        )
    }
}
export default MainInvoice