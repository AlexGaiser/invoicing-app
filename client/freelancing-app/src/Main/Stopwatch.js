import React, { Component } from 'react';

class Stopwatch extends Component {
    constructor(props) {
        super(props);
        // this.state={time:this.props.time.toLocaleTimeString()}
    }

    render() {
        console.log(this.props.time)
        return (
            <div>
                <h1>{this.props.time}</h1>
                <h3>{this.props.seconds}</h3>
                <h3>{this.props.timerSet ? ((this.props.seconds)-(this.props.timeStart))/1000:'00:00:00'}</h3>
                <button name='button1' onClick={this.props.setTimeStart} value='start time'>Start</button>
                <button onClick={this.props.stopTime}>Stop</button>
                <button>Reset</button>
            </div>
        )
    }
}

export default Stopwatch;