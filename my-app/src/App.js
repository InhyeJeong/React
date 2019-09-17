import React from 'react';
import './App.css';
import MainPage from './Components/MainPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <MainPage title="This is Title" sub="hello subtitle"></MainPage>
      </header>
    </div>
  );
}

export default App;
