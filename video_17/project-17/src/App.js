import React, { useState } from 'react'
import './App.css';
import Toggle from './Toggle';

function App() {
  const [status, setStatus] = useState(true)

  return (
    <div className="App">
      <h1>Hidden and Showing (Toggle)</h1>

      <button onClick={() => setStatus(true)}> Show </button>
      <button onClick={() => setStatus(false)}> Hide </button>
      {
        status ? //agr status ture hy to <h1>
          <h1>Hello world</h1> :  //nhi to  null
          null
      }

      <Toggle />
    </div>
  );
}
export default App;
