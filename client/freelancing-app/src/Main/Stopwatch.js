import React, { Component } from 'react';

class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.state = { time:'' }
    }
    setTime = ()=> this.setState({time:Date()})
    componentDidMount =()=>{
        setInterval(this.setTime, 500)
    }

    render() { 
        return ( 
            <div>
                <h1>{this.state.time}</h1>
            </div>
         );
    }
}
 
export default Stopwatch;