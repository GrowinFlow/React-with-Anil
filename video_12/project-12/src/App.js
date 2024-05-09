import React, { useState } from 'react';
import './App.css';
import Demo from './Demo';
import Counter from './Counter'

function App() {

  const [data, setData] = useState("Theo")

  function updateData() {
    setData("Theo Marson")
  }
  console.warn("_________________")
  return (
    <div className="App">

      < hr />
      <h1>Hello world</h1>
      <h1>{data}</h1>
      <button onClick={updateData}> Update data</button>

      < hr />
      <Demo />

      < hr />
      <Counter />
    </div>
  );
}

export default App;
