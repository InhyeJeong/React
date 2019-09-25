import React from 'react';
import './App.css';
import Layout from './Components/UILayout/Layout';

class App extends React.Component {
  render() {
    return (
      <div className="app-body">
        <div className="container-fluid">
          <Layout></Layout>
        </div>
      </div>
    );
  }
}

export default App;
