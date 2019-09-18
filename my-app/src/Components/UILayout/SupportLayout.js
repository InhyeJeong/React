import React, { Component } from 'react';
import 'element-theme-default';
import MainPage from '../MainPage';
import Sidebar from '../Sidebar';
import '../../App';

class SupportLayout extends Component {
	render() {
		return (
			// <div className="">
      //   <div className="">
      //     <div>
      //       <Sidebar></Sidebar>
      //     </div>
      //     <div className="">
      //       <MainPage></MainPage>
      //     </div>
      //   </div>
      // </div>
      <Sidebar></Sidebar>
		);
	}
}

export default SupportLayout;