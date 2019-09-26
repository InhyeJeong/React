import React, { Component } from 'react';
import ClickCounterButton from './ClickCounterButton';
import Count from './Count';

class Content extends Component {
	constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
		this.state = {
            counter: 0,
        }
	}
	handleClick (event) {
		this.setState({counter: ++this.state.counter})
	}
	render () {
        return (
            <div>
                <ClickCounterButton
                counter={this.state.counter}
                handler={this.handleClick}>Dont click me {this.state.counter} /></ClickCounterButton>
                <br/>
                <Count value={this.state.counter}></Count>
            </div>
        )
	}
}

export default Content;