import React, { Component } from 'react';

class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    
    render() {
        console.log(this.props.time)
        return (
            <div>
                <h1>{this.props.time}</h1>
                <button name='button1' onClick={this.props.alert} value='start time'>Start</button>
                <button>Stop</button>
                <button>Reset</button>
            </div>
        )
    }
}
 
export default Stopwatch;