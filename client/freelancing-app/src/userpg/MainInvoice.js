import React from "react"
import Axios from 'axios' 

const MainInvoice=(props)=> {
    
    // createAuthHeader = ()=>{
    //     const token = localStorage.getItem('token')
    //     return {
    //       headers: {
    //         'Authorization': "bearer " + token
    //       }
    //     };
    //   }

    // componentDidMount= async () => {
    //    const header = this.createAuthHeader()
    //     const response = await Axios.get('/records',header)
    //     console.log(response.data);
    //     this.setState({
    //       information: response.data.records,
    //       isLoaded:true
    //     })
    //     console.log(this.state.information[0].title)
    // }
        console.log('invoice displayed: '+props.invoiceDisplayed);
        return(
            
            <div className="invoice-container">
                <div>
                    {/* <h1 className="invoice-title">Google Logo Redesign</h1> */}
                    <div className="main-heading">
                        <h3 className= "main-title" >{props.isLoaded && props.invoiceDisplayed.title}</h3>
                        <h3 className= "main-id" >Invoice ID: {props.isLoaded && props.invoiceDisplayed.id}</h3>
                    </div>
                    <div className="main-line-1"></div>
                    <h3 className= "main-date" >{props.isLoaded && props.invoiceDisplayed.date}</h3>
                    <h3 className= "main-description" ><span className= "desc-word">Description:</span> {props.isLoaded && props.invoiceDisplayed.description}</h3>
                    <h3 className= "main-details" ><span className="details-word">Details:</span>  {props.isLoaded && props.invoiceDisplayed.extra_details}</h3>
                    <div className="main-line-1"></div>
                    <div className="credentials-container">
                        <h3 className= "main-time" >Time Logged: {props.isLoaded && props.invoiceDisplayed.logged_time}</h3>
                        <h3 className= "main-time" >Time Logged: {props.isLoaded && props.invoiceDisplayed.logged_time}</h3>
                        <h3 className= "main-time" >Time Logged: {props.isLoaded && props.invoiceDisplayed.logged_time}</h3>
                    </div>
                    <div className="main-line-1"></div>
                    <h3 className= "main-total" >Total Amount:{props.isLoaded && props.invoiceDisplayed.total_amount}</h3>

                    
                </div>
            </div>
        )
    }
export default MainInvoice