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

        const doc = new jspdf()

        const printPdf = ()=>{
            doc.setFontSize(13);
            doc.text(15,20,`This is place holder for username`);

            doc.setFontSize(13);
            doc.text(15,27,`This is place holder for  useraddress`);

            doc.setFontSize(13);
            doc.text(15,34,`This is place holder for phone and email`);

            doc.setFontSize(35);
            doc.text(11,57, ` {data.title}`);

            doc.setFontSize(10);
            doc.text(175,20,`Invoice ID: 1`);
            //line
            doc.line(200,63,15,63)

            doc.setFontSize(10);
            doc.text(15,68,`DATE: {data.date}`);

            doc.setFontSize(20);
            doc.text(15,82,`For:`);

            doc.setFontSize(20);
            doc.text(15,120,`Description:`);


            const splitTitle = doc.splitTextToSize(` Description: {data.description}`, 280);
            doc.setFontSize(13);
            doc.text(15, 130, splitTitle);
            // doc.text(15,120,`Description: ${data.description}`);

            doc.setFontSize(13);
            doc.text(15,90,`Placeholder for clientname`);

            doc.setFontSize(13);
            doc.text(15,97,`Placeholder for client  phone and email`);

            doc.setFontSize(13);
            doc.text(15,104,`Placeholder for client address`);
            //line

            doc.setFontSize(15);
            doc.text(15,190,`{data.extra_details}`);

            doc.setFontSize(15);
            doc.text(130,190,`Rate: placeholder `);

            doc.setFontSize(15);
            doc.text(130,200,`Time Logged: placeholder`);

            //line
            doc.line(200,212,20,212)

            doc.setFontSize(18);
            doc.text(115,240,`Total Amount:`);

            doc.setFontSize(20);
            doc.text(170,240,`$3000`);

            doc.save('invoicepdf.pdf')
        }

        printPdf()



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
              <div className="app-txt-wrap">
                <h3>{this.state.name}</h3>
                <h1>{this.state.jobtitle}</h1>
                <h3>{this.state.rate}</h3>
                 <h4>{this.state.comments}</h4>
              </div>

                <form className="form-group" onSubmit={this.submitForm}>
                    {/*client information  */}
                    <h4>Client Information</h4>
                    <div class="form-group">
                    <label for="exampleDropdownFormEmail2">Name</label>
                      <input className="form-control mb-2 input-lg" name='client_name' type="text" placeholder="Client Name" onChange={this.handleChange}/>
                    </div>
                    <div class="form-group">
                      <label for="exampleDropdownFormEmail2">Email</label>
                      <input className="form-control mb-2 input-lg" name='client_email' type="text" placeholder="example@business.com" onChange={this.handleChange}/>
                    </div>
                    <div class="form-group">
                      <label for="exampleDropdownFormEmail2">Phone Number</label>
                      <input className="form-control mb-2 input-lg" name='client_phone' type="text" placeholder="Client Phone Number" onChange={this.handleChange}/>
                    </div>
                    <div class="form-group">
                      <label for="exampleDropdownFormEmail2">City</label>
                      <input className="form-control mb-2 input-lg" name='client_city' type="text" placeholder="Client City" onChange={this.handleChange}/>
                    </div>
                    <div class="form-group">
                      <label for="exampleDropdownFormEmail2">Address</label>
                      <input className="form-control mb-2 input-lg" name='client_address' type="text" placeholder="Client Address" onChange={this.handleChange}/>
                    </div>
                    <div class="form-group">
                      <label for="exampleDropdownFormEmail2">Client Zipcode</label>
                      <input className="form-control mb-2 input-lg" name='client_zip' type="text" placeholder="Client Zip Code" onChange={this.handleChange}/>
                    </div>


                    {/* job information  */}
                    <div class="form-group">
                    <h4>Job Information</h4>
                      <label for="exampleDropdownFormEmail2">Title</label>
                      <input className="form-control mb-2 input-lg" name='jobtitle' type="text" placeholder="Invoice Title" onChange={this.handleChange}/>
                      <label for="exampleDropdownFormEmail2">Name</label>
                      <input className="form-control mb-2 input-lg" name='name' type="text" placeholder="Name" onChange={this.handleChange}/>
                      <label for="exampleDropdownFormEmail2">Description</label>
                      <textarea className="form-control input-lg" name='description' placeholder='Description' onChange={this.handleChange}/>
                      <label for="exampleDropdownFormEmail2">Extra Details</label>
                      <textarea className="form-control input-lg" name='extra_details' placeholder='Extra Details' onChange={this.handleChange}/>
                    </div>

                   {/* Bill information */}
                   <div class="form-group">
                    <h4>Billing Information</h4>
                    <label for="exampleDropdownFormEmail2">Rate</label>
                    <input className="form-control mb-2 input-lg" name='rate' type="text" placeholder="Rate" onChange={this.handleChange}/>
                    <label for="exampleDropdownFormEmail2">Extra Fees</label>
                    <input className="form-control mb-2 input-lg" name='extra_fees' type="text" placeholder="Extra Fees" onChange={this.handleChange}/>
                    <label for="exampleDropdownFormEmail2">Invoice No.</label>
                    <input className="form-control mb-2 input-lg" name='invoice_number' type="text" placeholder="InvoiceNo." onChange={this.handleChange}/>
                  </div>


                    <h1 className="f-white" >{`$${this.state.earnings}`}</h1>
                    <h1 className="f-white" >{`$${this.state.total_amount}`}</h1>
                    <button className="btn btn-success btn-lg btn-block">Submit</button>

                </form>
            </React.Fragment>
         );

        }
}

export default InvoiceForm
