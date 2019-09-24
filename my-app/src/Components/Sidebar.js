import React, { Component } from 'react';
import 'element-theme-default';
import { slide as Menu } from 'react-burger-menu'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import '../App.css'
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [
        {name: 'Home'},
        {name: 'About'},
        {name: 'Contact'},
        {name: 'Settings'},
      ]
    }
  }
  getItems () {
    let items;
    items = [
      <a key="0" href="/test"><i className="fa fa-fw fa-star-o" /><span>Favorites</span></a>,
      <a key="1" href="/test"><i className="fa fa-fw fa-bell-o" /><span>Alerts</span></a>,
      <a key="2" href="/test"><i className="fa fa-fw fa-envelope-o" /><span>Messages</span></a>,
      <a key="3" href="/test"><i className="fa fa-fw fa-comment-o" /><span>Comments</span></a>,
      <a key="4" href="/test"><i className="fa fa-fw fa-bar-chart-o" /><span>Analytics</span></a>,
      <a key="5" href="/test"><i className="fa fa-fw fa-newspaper-o" /><span>Reading List</span></a>
    ];
    return items;
  }
  render () {
    return (
      // <Layout.Col span={8}>
      //   <h5>My React Menu</h5>
      //   <Menu defaultActive="2" className="el-menu-vertical-demo"
      //                           onOpen={this.onOpen.bind(this)}
      //                           onClose={this.onClose.bind(this)}
      //                           theme="dark">
      //     <Menu.SubMenu index="1" title="Navigator One">
      //       <Menu.ItemGroup title="Group One">
      //         <Menu.Item index="1-1">Option 1</Menu.Item>
      //         <Menu.Item index="1-2">Option 2</Menu.Item>
      //       </Menu.ItemGroup>
      //       <Menu.ItemGroup title="Group Two">
      //         <Menu.Item index="1-3">Option 3</Menu.Item>
      //       </Menu.ItemGroup>
      //     </Menu.SubMenu>
      //     <Menu.Item index="2">Navigator Two</Menu.Item>
      //     <Menu.Item index="3">Navigator Three</Menu.Item>
      //   </Menu>
      // </Layout.Col>
      // <Menu>
      //   <a id="home" className="menu-item" href="/"></a>
      //   <a id="about" className="menu-item" href="/about">About</a>
      //   <a id="contact" className="menu-item" href="/contact">Contact</a>
      //   <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      // </Menu>
      <Menu>
        { this.getItems() }
      </Menu>
    );
  }
  
  onOpen() {
  
  }
  
  onClose() {
  
  }
}

export default Sidebar;