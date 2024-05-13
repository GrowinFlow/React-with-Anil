import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {counterContext} from './context/context'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <counterContext.Provider value={{count, setCount}}>
      
    <div className="App">
      <br />
<button onClick={()=>{setCount(count+1)}}>Counter === {count}</button>

      <br />
     <Navbar count={count} />

    </div>

    </counterContext.Provider>
    </>
  );
}

export default App;
