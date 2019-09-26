import React, { Component } from 'react';

class Count extends Component {
	render () {
        return <span>Clicked {this.props.value} times~~</span>
    }
}

export default Count;