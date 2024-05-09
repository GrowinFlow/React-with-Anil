import React from 'react'

export default function Demo() {

    let name = "Demo name ----- 1";  
    function updateData() {
      name = "Demo name --- 2";
      alert("My real name is : " + name)
  
    }
  console.warn("_________________")
    return (
      <div>
  
        <h6>Demo file start</h6>
          <h1>{name}</h1>
          <button onClick={updateData}> Demo btn</button>
        <h1>Demo file end</h1>
  
      </div>
    );
}
