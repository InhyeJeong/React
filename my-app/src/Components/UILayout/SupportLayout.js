import React, { Component } from 'react';
import 'element-theme-default';
import MainPage from '../MainPage';
import Clock from '../Clock';
import Sidebar from '../Sidebar';
import '../../App';

class SupportLayout extends Component {
	render() {
		return (
			<div className="">
        <div className="">
          <div>
            <Sidebar></Sidebar>
          </div>
          <div className="">
            <Clock></Clock>
            {/* <MainPage></MainPage> */}
          </div>
        </div>
      </div>
		);
	}
}

export default SupportLayout;