import React,{useState} from 'react';


export default function Counter() {

  const [data,  setData] = useState(0)

  function updateData(){
    setData(data+1)
  }
console.warn("_________________")
  return (
    <div className="App">

      <h1>This is counter : {data}</h1>
        <h1>{data}</h1>
        <button onClick={updateData}> Update Counter data</button>

    </div>
  );
}

