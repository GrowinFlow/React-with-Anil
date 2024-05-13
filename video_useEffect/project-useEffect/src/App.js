import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(0)

  useEffect(() => { // is ka use hum os time krty hyn jb hum chaty hyan k srif 1 bar he humra useEffect cly wo b jb Component Mount ho rha ho,
    alert("hy I'm alert")
  }, [])

  useEffect(() => { //is trhan hum tbb use krty hayn jb hum chty hayn k jb b 1 perticolar state / props change/update ho to to humara useEffect cly
    alert("hy I'm alert, call on counter triger "+ count)
    setColor(color + 3)
  }, [count])


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
