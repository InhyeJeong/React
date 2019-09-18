import React, { Component } from 'react';
import 'element-theme-default';
import { slide as Menu } from 'react-burger-menu'
import '../App.css'
class Sidebar extends Component {
  render() {
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
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
  
  onOpen() {
  
  }
  
  onClose() {
  
  }
}

export default Sidebar;