import React from 'react'

export default function Users() {

  let name = "Abdul"
  let detail = "This is variable data"
  function abc() {
    name = "Theo"
    alert(" This is Users Btn " + name)

  }

  return (
    <b>
      <h1>{name}</h1>
      <p>{detail}</p>
      <button onClick={()=>abc()}> Users Btn</button>
      <h3>{name}</h3>
    </b>
  )
}

