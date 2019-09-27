import React, { Component } from 'react';
import 'element-theme-default';
import MainPage from '../MainPage';
import Clock from '../Clock';
import Sidebar from '../Sidebar';
import Script from './../Note/Script'
import '../../App';
import SaveButton from '../Event/SaveButton';
import Content from '../Event/Content';
import Radio from './../Form/Radio'

class Layout extends Component {
	render() {
		return (
			<div className="">
        <div className="">
          <div>
            <Sidebar></Sidebar>
          </div>
          <div className="">
            {/* <Clock></Clock> */}
            {/* <Script></Script> */}
            {/* <MainPage></MainPage> */}
            {/* <SaveButton></SaveButton> */}
            {/* <Content></Content> */}
            <Radio></Radio>
          </div>
        </div>
      </div>
		);
	}
}

export default Layout;