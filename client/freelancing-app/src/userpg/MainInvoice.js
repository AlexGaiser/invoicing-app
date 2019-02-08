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
        console.log(`invoice displayed:  ${props.invoiceDisplayed}`);
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
                    <h2 id="for">Invoice To:</h2>
                    <div className="main-client-container">
                        <h3 className= "main-client-name" > {props.isLoaded && props.invoiceDisplayed.client_name}</h3>
                        <h3 className= "main-client-email" >{props.isLoaded && props.invoiceDisplayed.client_email}</h3>
                        <h3 className= "main-client-fee" >{props.isLoaded && props.invoiceDisplayed.client_phone}</h3>

                        <h3 className= "main-client-address" >{props.isLoaded && props.invoiceDisplayed.client_address}</h3>
                        <h3 className= "main-client-city" >{props.isLoaded && props.invoiceDisplayed.client_city}</h3>
                        <h3 className= "main-client-zip" >{props.isLoaded && props.invoiceDisplayed.client_zip}</h3>
                    </div>
                    <div className="main-line-1"></div>

                    <div className="credentials-container">
                        <h3 className= "main-time" >Time Logged: {props.isLoaded && props.invoiceDisplayed.logged_time}</h3>
                        <h3 className= "main-rate" >Rate: ${props.isLoaded && props.invoiceDisplayed.rate}.00</h3>
                        <h3 className= "main-fees" >Fees: ${props.isLoaded && props.invoiceDisplayed.extra_fees}.00</h3>
                    </div>
                    <div className="main-line-1"></div>
                    <h3 className= "main-total" >Total Amount: ${props.isLoaded && props.invoiceDisplayed.total_amount}.00</h3>

                    
                </div>
            </div>
        )
    }
export default MainInvoice