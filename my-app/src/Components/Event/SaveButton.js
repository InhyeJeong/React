import React, { Component } from 'react';

class SaveButton extends Component {
	constructor(props) {
		super(props)
		this.handleSave = this.handleSave.bind(this)
	}
	handleSave (event) {
		console.log(this, event)
	}
	render () {
		return <button onClick={this.handleSave}>Save</button>

	}
}

export default SaveButton;