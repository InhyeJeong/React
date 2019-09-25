import React, { Component } from 'react';
import Note from './Note';
import ReactDOM from 'react-dom';

// let secondsLeft = 5;

// let interval = setInterval(() => {
//   if (secondsLeft == 0) {
//     ReactDOM.render(React.createElement(
//       'div',
//       null,
//       'Note was removed after ',
//       secondsLeft,
//       ' seconds.'
//     ), document.getElementById('content'));
//     clearInterval(interval);
//   } else {
//     ReactDOM.render(React.createElement(
//       'div',
//       null,
//       React.createElement(Note, { secondsLeft: secondsLeft })
//     ), document.getElementById('content'));
//   }
//   secondsLeft--;
// }, 1000);

class Script extends Component {
	constructor(props) {
		super(props);
		this.state = {
			secondsLeft: 5,
		}
	}
	launchClock () {
		var result = <div>first</div>
    let interval = setInterval(() => {
			if (this.state.secondsLeft === 0) {
				clearInterval(interval);
				result = <div>Note was removed after {this.state.secondsLeft} seconds.</div>
			} else {
				this.setState({
					secondsLeft: --this.state.secondsLeft
				})
				result = <div><Note secondsLeft={this.state.secondsLeft} /></div>
			}
		}, 1000);
		console.log('this.state.secondsLeft ::', this.state.secondsLeft)
		console.log('interval ::', interval)
		return result
  }
	
	render() {
		return this.launchClock()
	}
}

export default Script;