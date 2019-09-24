import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Logger extends Component {
    constructor(props) {
        super(props)
        console.log('constructor')
    }
    //  move to componentDidMount
    // componentWillMount () {
    //     console.log('componentWillMount 실행')
    // }
    componentDidMount (e) {
        console.log('componentDidMount 실행')
        console.log('Dom node : ', ReactDOM.findDOMNode(this))
    }
    //  move to componentDidUpdate
    // componentWillReceiveProps (newProps) {
    //     console.log('componentWillReceiveProps 실행')
    //     console.log('newProps : ', newProps)
    // }
    shouldComponetUpdate (newProps, newState) {
        console.log('shouldComponetUpdate 실행')
        console.log('newProps : ', newProps)
        console.log('newState : ', newState)
        return true
    }
    // componentWillUpdate (newProps, newState) {
    //     console.log('componentWillUpdate 실행')
    //     console.log('newProps : ', newProps)
    //     console.log('newState : ', newState)
    // }
    componentDidUpdate (oldProps, oldState) {
        console.log('componentDidUpdate 실행')
        console.log('oldProps : ', oldProps)
        console.log('oldState : ', oldState)
    }
    componentWillUnmount() {
        console.log('componentWillUnmount 실행')
    }
    render() {
        return (
            <div>
                {this.props.time}
            </div>
        )
    }
}

export default Logger;