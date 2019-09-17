import React, { Component } from 'react';
import 'element-theme-default';
import MainPage from '../MainPage';
import '../../App';

class SupportLayout extends Component {
	render() {
		return (
			<div className="app-body">
				<div className="container-fluid">
					<MainPage></MainPage>
				</div>
			</div>
		);
	}
}

export default SupportLayout;