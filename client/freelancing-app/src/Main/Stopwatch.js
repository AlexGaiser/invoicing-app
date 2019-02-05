import React, { Component } from 'react';
import Moment from 'moment'
import './Main-styles.css'

class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.state={
            startTime:0,
            displayTime: '00:00:00'
        }
        // this.state={time:this.props.time.toLocaleTimeString()}
    }
    startTime = ()=>{
        const startTime = new Date().getTime()
        this.setState({startTime:startTime})
        console.log(this.state.startTime)
        setInterval(this.displayTimer, 100)
    }

    displayTimer = ()=>{
        const now = new Date().getTime()
        const timerValue = now-this.state.startTime
        const hours = Math.floor((timerValue % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((timerValue % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((timerValue % (1000 * 60)) / 1000)
        this.setState({
            displayTime: `${hours}:${minutes}:${seconds}`
        })
    }

    renderTime = (time)=>{

    }



    render() {
        console.log(this.props.timeStart)
        console.log(this.props.elapsedTime)

        return (
            <div className="stopWatch">
                <h1>{Moment().format("hh:mm:ss a")}</h1>
                <h3>{this.state.displayTime}</h3>
                {/* <h3>{this.props.timerSet ?this.props.elapsedTime : '00:00:00'}</h3> */}
                {/* <h3>{this.props.timerSet ? this.props.time.subtract(this.props.timeStart):'00:00:00'}</h3> */}
                <button className="mr-3 btn btn-primary" name='button1' onClick={this.startTime} value='start time'>Start</button>
                <button className="mr-3 btn btn-primary" onClick={this.props.stopTime}>Stop</button>
                <button className="btn btn-danger">Reset</button>
            </div>
        )
    }
}

export default Stopwatch;
