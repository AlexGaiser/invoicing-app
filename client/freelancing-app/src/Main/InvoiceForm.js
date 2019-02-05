import React, { Component } from 'react';
import './Main-styles.css'

class InvoiceForm extends Component {
    constructor(props) {
        super(props);
        this.state = {total: 0.00,
            object:{name:'Kwalex',
            ocupation:'coolguy'}}
    }
    calculateTotal = ()=>{
        this.setState({
           
        })
    }
    submitForm=(event)=>{
        console.log();
        event.preventDefault()
        this.props.liftState(this.state.object)
        this.props.sendData(event)
    }



    render() {
        return (
            <React.Fragment>


    // this.props.liftState(this.state.object)
    render() {
        return ( 
            <React.Fragment>
                <h3>{this.props.name}</h3>
                <h1>{this.props.jobtitle}</h1>
                <h3>{this.props.rate}</h3>
                <form className="form-group" onSubmit={this.submitForm}>
                    <input className="form-control mb-2" name='jobtitle' type="text" placeholder="enter job" onChange={this.props.handleChange}/>
                    <input className="form-control" name='rate' type="text" placeholder="enter rate" onChange={this.props.handleChange}/>
                    <input className="form-control" name='name' type="text" placeholder="enter name" onChange={this.props.handleChange}/>
                    
                    <h1 className="f-white">{this.props.timerValue && this.props.timerValue.seconds * parseInt(this.props.rate)}</h1>                    
                    <button className="btn btn-primary btn-lg btn-block">Submit</button>

                </form>
            </React.Fragment>
         );

        }
    }

export default InvoiceForm;
