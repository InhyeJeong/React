import React, { Component } from 'react';

class Content extends Component {
	constructor(props) {
		super(props)
		this.state = {
            counter: 0,
        }
	}
	handleClick (event) {
		this.setState({counter: ++this.state.counter})
	}
	render () {
		return <button onClick={this.handleClick.bind(this)}
                       className="btn btn-primary">Dont click me {this.state.counter} times ~~</button>
	}
}

export default Content;