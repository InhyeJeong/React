import React, { Component } from 'react';
import AnalogClock from './AnalogClock';
import Logger from './Logger';
class Clock extends Component {
	constructor(props) {
		super(props);
    this.launchClock()
    this.state = {
      counter: 0,
      currentTime: (new Date()).toLocaleString('en')
    }
  }
  launchClock () {
    setInterval(() => {
      this.setState({
        counter: ++this.state.counter,
        //  매 초마다 현재시각으로 상태 갱신
        currentTime: (new Date()).toLocaleString('en')
      });
    }, 1000);
  }
  render() {
    //  componet로 분리해서 사용가능
    const DigitalClock = function(props) {
      return <div style={{top: 250, left: '52%', position: 'relative'}}>{props.time}</div>
    }
    if (this.state.counter > 2) return <div><h1>2초가 지났어요 !!</h1></div>
    return (
      <div>
        <AnalogClock time={this.state.currentTime}/>
        <DigitalClock time={this.state.currentTime}/>
        <h1>Below is Logger</h1>
        <Logger time={this.state.currentTime}></Logger>
      </div>
    )
  }
}

export default Clock;