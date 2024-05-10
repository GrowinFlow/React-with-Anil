import React, {useState} from 'react'
import './App.css';

function App() {

  const [data, setData] = useState(null)
  const [print, setPrint] = useState(false)

  function getData(val){
    
    // console.log(val.target.value)
    setData(val.target.value)
    setPrint(false)
  }
  return (
    <div className="App">
     
     <h1>Get input box value</h1>
     <input type="text" placeholder="Enter your name" onChange={getData} />
     <h2>Hello {data}!</h2>

     <button onClick={()=>setPrint(true)}>Pirnt Data</button>
     {
      print?
      <h1>{data}</h1>
      :null
     }
    </div>
  );
}

export default App;
