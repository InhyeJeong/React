import React from 'react';
import './App.css';
import SupportLayout from './Components/UILayout/SupportLayout';

class App extends React.Component {
  render() {
    return (
      <div className="app-body">
        <div className="container-fluid">
          <SupportLayout></SupportLayout>
        </div>
      </div>
    );
  }
}

export default App;
