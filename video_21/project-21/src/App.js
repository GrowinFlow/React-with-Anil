import React from 'react'
import './App.css';
import User from './User';
import ProUse from './ProUse';

function App() {

  function getData(){
    alert("Hi, Iam alert, I Live in App.js")
  }
  return (
    <div className="App">
      <h1> function as a props</h1>
     
      <hr />
      <User data={getData}/>

      <hr />
      <ProUse data={getData} />

    </div>
  );
}
export default App;
