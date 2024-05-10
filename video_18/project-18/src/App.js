import React, { useState } from 'react'
import './App.css';

function App() {

  const [name, setName] = useState("")
  const [tnc, setTnc] = useState(false)
  const [interest, setInerest] = useState("")
  
  function getFormData(e) {
    e.preventDefault()
    console.log(name, tnc, interest)
  }
  return (
    <div className="App">
      <h1>Basic Form</h1>

      <form onSubmit={getFormData}> 

        <input type='text' placeholder='Enter your name' onChange={(e)=>setName(e.target.value)}/>
        <br />
        <br />

        <select onChange={(e)=>setInerest(e.target.value)} >
          <option>Sleact Movie</option>
          <option>Hacker</option>
          <option>Funny</option>
        </select>
        <br />
        <br />

        <input type='checkbox'  onChange={(e)=>setTnc(e.target.checked)} /> <span>Agree Terms</span>
        <br />
        <br />
<button>Submit</button>
      </form>

    </div>
  );
}
export default App;
