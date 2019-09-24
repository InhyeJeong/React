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
    //  xhr요청, dom요소 접근 가능
    componentDidMount (e) {
        console.log('componentDidMount 실행')
        console.log('Dom node : ', ReactDOM.findDOMNode(this))
    }
    //  move to componentDidUpdate
    // componentWillReceiveProps (newProps) {
    //     console.log('componentWillReceiveProps 실행')
    //     console.log('newProps : ', newProps)
    // }
    //  이벤트 렌더링 직전에 실행
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
    //  컴포넌트 갱신 후, DOM이나 그 외의 요소를 다루는 코드
    componentDidUpdate (oldProps, oldState) {
        console.log('componentDidUpdate 실행')
        console.log('oldProps : ', oldProps)
        console.log('oldState : ', oldState)
    }
    //  이벤트 제거 및 DOM에서 컴포넌트가 제거되기 직전에 실행됨
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