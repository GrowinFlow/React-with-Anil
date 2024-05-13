import React, { useEffect, useState } from 'react'
import User from './User'
import './App.css'


function App() {

  useEffect(() => {
    console.log("This is useffect 1")
  })
  useEffect(() => {
    console.log("this is useEffect 2")
  })

    const [n, setN]=useState(0)
  return (
    <div className='App'>
      <h1>App component in use | Hooks</h1>
      <h5>This is counter {n}</h5>
      <button onClick={()=>setN(n+1)}>Update n {n}</button>

      <br />
      <User no={n} />

    </div>
  )
}

export default App