import React, {useState } from 'react'
import User from './User'
import './App.css'

function App() {
  const [name, setName] = useState("Theo")

  return (
    <div className='App'>
    <h1>App component</h1>
    <button onClick={()=>setName("Marson")}>Update name in User component</button>
    <hr />
    <User name={name}/>
  </div>
  )
}

export default App