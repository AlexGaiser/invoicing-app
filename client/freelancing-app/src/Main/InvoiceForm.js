import React, { Component } from 'react';

class InvoiceForm extends Component {
    constructor(props) {
        super(props);
        this.state = {earnings: 0.00,
            
            ocupation:'coolguy'}
        }
    
    calculateEarnings= ()=>{
        this.setState({earnings:this.props.timerValue?  this.props.timerValue.seconds * parseInt(this.props.rate) : '0.00'})
    }

    submitForm=(event)=>{
        
        console.log();
        event.preventDefault()
        const data = {
            total_amount:this.state.earnings,
            rate:this.props.rate,
            title: this.props.jobtitle,
            name:this.props.name,
            description:this.props.comments,
            extra_details:'info for extra details goes here',
            extra_fees:300,
            date: '2019-01-01 00:00:00-05'
        }
        
        this.props.sendData(data)
        // clearInterval(this.state.interval)
    }

    
    componentDidMount=()=>{
        const start= setInterval(this.calculateEarnings,500)
        this.setState({interval:start})
    }

    // this.props.liftState(this.state.object)
    render() {

        return ( 
            <React.Fragment>
                <h3>{this.props.name}</h3>
                <h1>{this.props.jobtitle}</h1>
                <h3>{this.props.rate}</h3>
                <h4>{this.props.comments}</h4>
                <form onSubmit={this.submitForm}>
                    <input name='jobtitle' type="text" placeholder="enter job" onChange={this.props.handleChange}/>
                    <input name='rate' type="text" placeholder="enter rate" onChange={this.props.handleChange}/>
                    <input name='name' type="text" placeholder="enter name" onChange={this.props.handleChange}/>
                    <textarea name='comments' placeholder='enter comments' onChange={this.props.handleChange}/>
                    <h1>{`$${this.state.earnings}`}</h1>                    
                    <button>Submit</button>
                </form>
            </React.Fragment>
         );

        }
}
 
export default InvoiceForm;