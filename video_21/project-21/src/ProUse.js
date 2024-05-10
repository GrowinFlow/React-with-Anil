import React from 'react'

function ProUse(props) {
  return (
    <div>
        <h1>Prouse</h1>

        <button onClick={props.data}>Call data in ProUse</button>
    </div>
  )
}

export default ProUse;