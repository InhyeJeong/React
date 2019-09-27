import React, { Component } from 'react';
// NOTE: http://react.tips/radio-buttons-in-react-16/
class Radio extends Component {
    constructor(props) {
        super(props)
        this.handleRadio = this.handleRadio.bind(this)
        this.state = {
            selectedOption: '',
        }
    }
    handleRadio (event) {
        this.setState({selectedOption: event.target.value})
    }
	render () {
        return <form>
            ANGULAR<input type="radio"
                   name="radioGroup"
                   value="angular"
                   checked={this.state.selectedOption === 'angular'}
                   onChange={this.handleRadio}>
            </input>
            REACT<input type="radio"
                   name="radioGroup"
                   value="react"
                   checked={this.state.selectedOption === 'react'}
                   onChange={this.handleRadio}>
            </input>
            VUE<input type="radio"
                   name="radioGroup"
                   value="vue"
                   checked={this.state.selectedOption === 'vue'}
                   onChange={this.handleRadio}>
            </input>
        </form>
    }
}

export default Radio;