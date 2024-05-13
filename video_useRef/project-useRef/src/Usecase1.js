import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(0)

  
  const a = useRef(0)
  
  useEffect(() => { 
    a.current = a.current+1
    console.log(`hy I'm useeffect ${a.current}`)

  })


  return (
    <>

      <div className="App">
        <br />
        <button onClick={() => { setCount(count + 1) }}>Counter === {count}</button>

        <br />
        <Navbar color={"navy" + " blue" + color} />

      </div>

    </>
  );
}

export default App;
