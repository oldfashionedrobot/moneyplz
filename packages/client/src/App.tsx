import React from 'react';
import api from './lib/api.service';

import logo from './logo.svg';
import './App.css';

function App() {
  const body = {
    hello: 'yo',
    fgdfg: 'hgfghdhdgh'
  };

  async function sendRequest() {
    const postJSON = await api.post(body);
    console.log(postJSON);

    const getJSON = await api.get(body);
    console.log(getJSON);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={sendRequest}>Click Me to Request</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
