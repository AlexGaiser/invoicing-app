import React, { Component } from 'react';
import './Main-styles.css'

class InvoiceForm extends Component {
    constructor(props) {
        super(props);
        this.state = {total: 0.00 }
    }
    calculateTotal = ()=>{
        this.setState({
            // total:this.props.
        })
    }


    render() {
        return (
            <React.Fragment>
                <h1>{this.props.form1}</h1>
                <h3>{this.props.form2}</h3>
                <form onSubmit={this.props.sendData} className="form-group">
                    <input className="form-control mb-2" name='form1' type="text" placeholder="enter job" onChange={this.props.handleChange}/>
                    <input className="form-control" name='form2' type="text" placeholder="enter rate" onChange={this.props.handleChange}/>

                    <h1 className="f-white">{`$${this.state.total}`}</h1>
                    <button className="btn btn-primary btn-lg btn-block">Submit</button>
                </form>
            </React.Fragment>
         );

        }
    }

export default InvoiceForm;
