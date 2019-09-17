import React, { Component } from 'react';

class MainPage extends Component {
    render () {
        return (
            <header>
              <h1>{this.props.title}</h1>
							<h3>{this.props.sub}</h3>
            </header>
        );
    }
}

export default MainPage;