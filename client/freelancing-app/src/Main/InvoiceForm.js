import React, { Component } from 'react';
import './Main-styles.css'
import jspdf from 'jspdf'

import moment from 'moment';
import Axios from 'axios';

class InvoiceForm extends Component {
    constructor(props) {
        super(props);
        this.state = {earnings: 0.00,
                extra_fees:0.00
          }
        }

    componentDidMount= ()=>{
            this.fetchUserInfo()
            const start= setInterval(this.calculateEarnings,500)
            this.setState({interval:start})
        }

    submitForm=(event)=>{
        console.log();
        event.preventDefault()
        const invoice = {
            // Need to add Client Email, User Email, User Phone Number, User Address 
            
           
            // Job Information
            title: this.state.jobtitle,
            invoice_number: this.state.invoice_number,
            // date: ,
            description:this.state.description,
            extra_details: this.state.extra_details,
            logged_time: moment().format('hh:mm:ss a'),
            //Billing Information  

            billable_hours: this.state.billable_hours,
            rate:this.state.rate,
            hourly_earnings:this.state.earnings,
            extra_fees:300,// extra fees need an input field and they can be added to the "total_amount"
            total_amount:this.state.total_amount, //+extra_fees 
            // client information
            client_name:this.state.client_name,
            client_email: this.state.client_email,
            client_phone: parseInt(this.state.client_phone),
            client_address:this.state.client_address,
            client_city:this.state.client_city,
            client_zip: this.state.client_zip,

            // user information
            

        }
      
        // let doc = new jspdf({
        //     orientation: 'landscape',
        //     unit: 'in',
        //     format: [4, 2]
        //   })
        // const doc = new jspdf()

        // const printPdf = ()=>{
        //     doc.setFontSize(30);
        //     doc.text(20,40, `title: ${invoice.title}`);
        //     doc.setFontSize(15);
        //     doc.text(20,20,`Rate: ${invoice.rate}`);

        //     doc.save('invoicepdf.pdf')
        // }

        // printPdf()

        // const user={
        //     userBusiness:this.state.userInfo.business_name,// pull from userprofile in database
        //     UserName:this.state.userInfo.name,
        //     userCity: this.state.userInfo.user_city,
        //     userEmail: this.state.userInfo.user_email,
        //     user_phone:this.state.userInfo.user_phone,
        //     user_id:localStorage.getItem('id')
        // }

        this.props.sendData(invoice)
        alert('data sent')
        // clearInterval(this.state.interval)
    }
    createAuthHeader = ()=>{
        const token = localStorage.getItem('token')
        const header = {
        headers:{'Authorization':  "bearer " +token}
        }
        localStorage.setItem('authorization', header)
        return header
    }

    

    fetchUserInfo = async ()=>{
        const header = this.createAuthHeader()
        const user = localStorage.getItem('id')
        const response = await Axios.get(`/users/${user}`,header)
        console.log(response.data)
        
        this.setState({userInfo:response.data})
    }


    calculateEarnings= ()=>{
        const billable_hours = this.props.timerValue ? this.props.timerValue.seconds/3600 : 0
        console.log(billable_hours)
        const earnings = billable_hours* parseInt(this.state.rate)
        this.setState({
            billable_hours: billable_hours, 
            earnings: earnings,
            total_amount: parseInt( earnings) + parseInt(this.state.extra_fees)})
        }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        this.updateInvoiceData()
    };

    updateInvoiceData =()=>{
        const invoice = {
            // Need to add Client Email, User Email, User Phone Number, User Address 
            
           
            // Job Information
            title: this.state.jobtitle,
            invoice_number: this.state.invoice_number,
            date: moment(),
            description:this.state.description,
            extra_details: this.state.extra_details,
            logged_time: moment().format('hh:mm:ss a'),
            //Billing Information  

            billable_hours: this.state.billable_hours,
            rate:this.state.rate,
            hourly_earnings:this.state.earnings,
            extra_fees:300,// extra fees need an input field and they can be added to the "total_amount"
            total_amount:this.state.total_amount, //+extra_fees 
            // client information
            client_name:this.state.name,
            client_email: this.state.client_email,
            client_phone: this.state.client_phone,
            client_address:this.state.client_address,
            client_city:this.state.client_city,
            client_zip: parseInt(this.state.client_zip),
    
        }
        this.props.liftState(invoice)

    }
    // this.props.liftState(this.state.object)
    render() {
        return (
            <React.Fragment>
                <h3>{this.state.name}</h3>
                <h1>{this.state.jobtitle}</h1>
                <h3>{this.state.rate}</h3>
                 <h4>{this.state.comments}</h4>

                <form className="form-group" onSubmit={this.submitForm}>
                    {/*client information  */}
                    <input className="form-control mb-2 input-lg" name='client_name' type="text" placeholder="Enter Client name" onChange={this.handleChange}/>
                    <input className="form-control mb-2 input-lg" name='client_email' type="text" placeholder="example@business.com" onChange={this.handleChange}/>
                    <input className="form-control mb-2 input-lg" name='client_phone' type="text" placeholder="Enter Client Phone Number" onChange={this.handleChange}/>
                    
                    <input className="form-control mb-2 input-lg" name='client_city' type="text" placeholder="Enter Client City" onChange={this.handleChange}/>
                    <input className="form-control mb-2 input-lg" name='client_address' type="text" placeholder="Enter Client Address" onChange={this.handleChange}/>
                    <input className="form-control mb-2 input-lg" name='client_zip' type="text" placeholder="Enter Client Zip Code" onChange={this.handleChange}/>
                    
                    
                    {/* job information  */}
                    <input className="form-control mb-2 input-lg" name='jobtitle' type="text" placeholder="Enter Invoice Title" onChange={this.handleChange}/>
                    <input className="form-control mb-2 input-lg" name='name' type="text" placeholder="enter name" onChange={this.handleChange}/>
                    <textarea className="form-control input-lg" name='description' placeholder='Enter Description' onChange={this.handleChange}/>
                    <textarea className="form-control input-lg" name='extra_details' placeholder='Extra Details' onChange={this.handleChange}/>
                   
                   {/* Bill information */}
                    <input className="form-control mb-2 input-lg" name='rate' type="text" placeholder="enter rate" onChange={this.handleChange}/>
                    <input className="form-control mb-2 input-lg" name='extra_fees' type="text" placeholder="Extra Fees" onChange={this.handleChange}/>
                    <input className="form-control mb-2 input-lg" name='invoice_number' type="text" placeholder="InvoiceNo." onChange={this.handleChange}/>


                    <h1 className="f-white" >{`$${this.state.earnings}`}</h1>
                    <h1 className="f-white" >{`$${this.state.total_amount}`}</h1>
                    <button className="btn btn-success btn-lg btn-block">Submit</button>

                </form>
            </React.Fragment>
         );

        }
}

export default InvoiceForm
