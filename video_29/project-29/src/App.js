import React, {useState} from 'react'
import User from './User'
import './App.css'


function App() {

  const [data, setData]=useState("Theo")
  return (
    <div className='App'>
      <h1>App component in use | Hooks</h1>

      <br />
      <User name={data} />
      <button onClick={()=>setData("Marson")}>Update data</button>



    </div>
  )
}

export default App