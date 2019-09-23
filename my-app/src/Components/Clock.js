import React, { Component } from 'react';
import AnalogClock from './AnalogClock';
class Clock extends Component {
	constructor(props) {
		super(props);
    this.launchClock()
    this.state = {
      currentTime: (new Date()).toLocaleString('en')
    }
  }
  launchClock () {
    setInterval(() => {
      this.setState({
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
    return (
      <div>
        <AnalogClock time={this.state.currentTime}/>
        <DigitalClock time={this.state.currentTime}/>
      </div>
    )
  }
}

export default Clock;