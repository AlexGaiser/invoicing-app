import React, { Component } from 'react';
import './Main-styles.css'
import jspdf from 'jspdf'

import moment from 'moment';

class InvoiceForm extends Component {
    constructor(props) {
        super(props);
        this.state = {earnings: 0.00,
                extra_fees:0.00
          }
        }

    calculateEarnings= ()=>{
        this.setState({earnings:this.props.timerValue?  this.props.timerValue.seconds * parseInt(this.props.rate) : '0.00'})
    }

    submitForm=(event)=>{

        console.log();
        event.preventDefault()
        const data = {


            // Need to add Client Email, User Email, User Phone Number, User Address 
            total_amount:this.state.earnings +this.state.extra_fees, //+extra_fees 
            hourly_earnings:this.state.earnings,
            rate:this.props.rate,
            title: this.props.jobtitle,
            client_name:this.props.name,
            user_name:this.props.name,// pull from userprofile in database
            description:this.props.comments,
            extra_details:'info for extra details goes here',// new text field for extra details
            extra_fees:300,// extra fees need an input field and they can be added to the "total_amount"
            date: '2019-01-01 00:00:00-05',// Need a dynamic date /time to be logged
            logged_time: moment().format('hh:mm:ss a'),
            user_id:localStorage.getItem('id')
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
            doc.text(11,57, ` ${data.title}`);

            doc.setFontSize(10);
            doc.text(175,20,`Invoice ID: 1`);
            //line
            doc.line(200,63,15,63)

            doc.setFontSize(10);
            doc.text(15,68,`DATE: ${data.date}`);

            doc.setFontSize(20);
            doc.text(15,82,`For:`);

            doc.setFontSize(12);
            doc.text(15,120,`Description: ${data.description}`);

            doc.setFontSize(13);
            doc.text(15,90,`Placeholder for clientname`);

            doc.setFontSize(13);
            doc.text(15,97,`Placeholder for client  phone and email`);

            doc.setFontSize(13);
            doc.text(15,104,`Placeholder for client address`);
            //line

            doc.setFontSize(15);
            doc.text(15,190,`${data.extra_details}`);

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



        this.props.sendData(data)


        // clearInterval(this.state.interval)
    }
    createAuthHeader = ()=>{
        const token = localStorage.getItem('token')
        const header = {
        headers:{'Authorization':  "bearer " +token}
        }
        localStorage.setItem('authorization', header)
    }

    componentDidMount=()=>{

        const start= setInterval(this.calculateEarnings,500)
        this.setState({interval:start})
    }




    // this.props.liftState(this.state.object)
    render() {
        return (
            <React.Fragment>
              <div className="app-txt-wrap">
                <h3>{this.props.name}</h3>
                <h1>{this.props.jobtitle}</h1>
                <h3>{this.props.rate}</h3>
                <h4>{this.props.comments}</h4>
              </div>

                <form className="form-group" onSubmit={this.submitForm}>
                    <input className="form-control mb-2 input-lg" name='jobtitle' type="text" placeholder="enter job" onChange={this.props.handleChange}/>
                    <input className="form-control mb-2 input-lg" name='rate' type="text" placeholder="enter rate" onChange={this.props.handleChange}/>
                    <input className="form-control mb-2 input-lg" name='name' type="text" placeholder="enter name" onChange={this.props.handleChange}/>
                    <textarea className="form-control input-lg" name='comments' placeholder='enter comments' onChange={this.props.handleChange}/>
                    <h1 className="f-white" >{`$${this.state.earnings}`}</h1>
                    <button className="btn btn-success btn-lg btn-block">Submit</button>

                </form>
            </React.Fragment>
         );

        }
}

export default InvoiceForm
