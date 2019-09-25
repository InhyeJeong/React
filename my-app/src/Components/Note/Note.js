import React, { Component } from 'react';

class Note extends Component {
	confirmLeave (e) {
		let confirmMessage = "정말 닫으시겠습니까?"
		e.returnValue = confirmMessage
		return confirmMessage
	}
	componentDidMount (e) {
		console.log('beforeunload confirmLeave이벤트 리스너 등록')
		window.addEventListener('beforeunload', this.confirmLeave)
	}
	componentWillUnmount () {
		console.log('beforeunload confirmLeave이벤트 리스너 제거')
		window.removeEventListener('beforeunload', this.confirmLeave)
	}
	render () {
		console.log('render')
		return <div>
			<p>부모 컴포넌트는 {this.props.secondsLeft} 뒤에 제거된다.</p>
			<input type="text"></input>
		</div>

	}
}

export default Note;