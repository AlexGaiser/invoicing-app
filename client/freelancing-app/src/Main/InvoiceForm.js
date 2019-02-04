import React, { Component } from 'react';

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

    // this.props.liftState(this.state.object)
    render() {
        return ( 
            <React.Fragment>
                <h1>{this.props.form1}</h1>
                <h3>{this.props.form2}</h3>
                <form onSubmit={this.submitForm}>
                    <input name='form1' type="text" placeholder="enter job" onChange={this.props.handleChange}/>
                    <input name='form2' type="text" placeholder="enter rate" onChange={this.props.handleChange}/>
                    <h1>{`$${this.state.total}`}</h1>                    
                    <button>Submit</button>
                </form>
            </React.Fragment>
         );

        }
    }
 
export default InvoiceForm;