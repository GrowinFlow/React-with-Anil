import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  
  const btnRef = useRef(0)
  
  useEffect(() => { 
    console.log(`hy I'm useeffect `)
    btnRef.current.style.backgroundColor = "red"
  },[])


  return (
    <>

      <div className="App">
        <br />
        <button ref={btnRef} onClick={() => { setCount(count + 1) }}>Counter === {count}</button>

        <br />
<span ref={btnRef}>hjt</span>
      </div>

    </>
  );
}

export default App;
