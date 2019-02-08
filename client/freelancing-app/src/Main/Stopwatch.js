import './Main-styles.css'
import React, { Component } from 'react';
import Moment from 'moment'


class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.state={
            startTime:0,
            displayTime: '00:00:00',
            newTimer:true
        }
        // this.state={time:this.props.time.toLocaleTimeString()}
    }

    startTime = ()=>{
        if(this.state.newTimer){
            const startTime = new Date().getTime()
            this.setState({startTime:startTime})
            const start = setInterval(this.displayTimer,500)
            this.setState({
                interval:start,
                newTimer:false
            })
        }
        else{
            const start = setInterval(this.displayTimer,500)
            this.setState({interval:start})
        }
    }


    stopTimer = ()=>{
        clearInterval(this.state.interval)

    }

    resetTimer  =()=>{
        this.setState({
            newTimer:true,
            displayTime:'00:00:00'
        })

        this.stopTimer()


    }

    displayTimer =()=>{
        const now = new Date().getTime()
        const timerValue = now - this.state.startTime
        const hours = Math.floor((timerValue % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((timerValue % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((timerValue % (1000 * 60)) / 1000)
        this.setState({
            timerValue:{
                totalTime: timerValue,
                hours:hours,
                minutes:minutes,
                seconds:seconds,

            },
            timerStarted:true,
            displayTime: `${hours}:${minutes}:${seconds}`
        })
        this.props.liftState('timerValue',this.state.timerValue)
    }



    render() {

        return (
            <div className="stopWatch mb-3 container-fluid">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="timer-wrap">
                  <label className="" for="exampleDropdownFormEmail2">Timer</label>
                  <h1 className="mb-0 display-2 timer-txt">{this.state.displayTime}</h1>
                </div>
              </div>
            </div>
            <div className="row p-2 d-flex flex-row justify-content-end">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <label className="mb-0 text-left thin-light" for="exampleDropdownFormEmail2">Time of Day</label>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <h4 className="lead timeofday-txt mb-0 thin-light">{Moment().format("hh:mm:ss a")}</h4>
              </div>
            </div>


                {/* <h3>{this.props.timerSet ?this.props.elapsedTime : '00:00:00'}</h3> */}
                {/* <h3>{this.props.timerSet ? this.props.time.subtract(this.props.timeStart):'00:00:00'}</h3> */}

                <button className="start-btn mr-3 btn-lg btn btn-primary" name='button1' onClick={this.startTime} value='start time'>Start</button>
                <button className="stop-btn mr-3 btn-lg btn btn-primary" onClick={this.stopTimer}>Stop</button>
                <button className="reset-btn btn btn-lg btn-danger" onClick={this.resetTimer}>Reset</button>
            </div>
        )
    }
}

export default Stopwatch;
