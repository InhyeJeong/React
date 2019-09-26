import React, { Component } from 'react';

class ClickCounterButton extends Component {
	render () {
		return <button onClick={this.props.handler}
                       className="btn btn-primary">Dont touch me with ur dirty hands!!! ^_ㅠ</button>
	}
}

export default ClickCounterButton;