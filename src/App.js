import React from 'react';
import logo from './logo.svg';
import './App.css';

//Title.jsをインポートする
import Title from './components/Title/Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      <Title title="Hello World 3.0"/>
      </header>
       <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
       </p>
    </div>
  );
}

export default App;
