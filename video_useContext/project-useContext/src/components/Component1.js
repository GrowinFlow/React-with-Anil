import React, {useContext} from 'react'
import { counterContext } from '../context/context'

const Component1 = () => {
  const value = useContext(counterContext)
  return (

    <div>

<h1>I'm Component 1</h1>
<h5>This is Apps component counter:  {value.count} </h5>
    </div>
  )
}

export default Component1