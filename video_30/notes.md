      https://www.youtube.com/watch?v=zJeyz5mIXGQ&list=PL8p2I9GklV47BCAjiCtuV_liN9IwAl8pM&index=30


##  useEffect in React JS
* Why use useEffect
* What is useEffect
* Example useEffect
* useEffect with state and props
* Quiz



## Why use useEffect
* `useEffect ka use lifecycle ky le a hota hy, Qu k Functional components ma lifecycle methods nhi hoty is le a Ya HOOKS kam krty hyan`
* `Jb b hmari koi chez updaate ho rhi hy ya bn rhi hy to hum os ko is HOOK ko use kr skty hayn, is ko condtions ma use kr skty hayn`

* `useEffect is ma All LIFECYCLE methods hoty hayn`
 



## kb kb clta hy?

      import React, { useEffect, useState } from 'react'

      export function App() { 

      useEffect(() => {
      console.log("This is useffect")
      })

      const [n, setN] = useState(0); //useState
      return (
      <div>
            <h5>This is counter {n}</h5>
            <button onClick={()=>setN(n+1)}>Update n {n}</button>
      </div>
      )
      }

 `(useEfect)` `page reload hony pr b clta hy ` `state change hony pr clta hy`


`Jis trhan hum  ` `useState` ` ko bar bar use kr skty hayn is trhan is ko b multipl jga use kr skty hayn`



##
## Previous Quiz
## Kya hum Hooks ko class component ma use kr skty hyan?
Ans: `NO` ` Hooks Functions ky le a hoty hayn`
>  * `correct my ans`  


## New Quiz
## Kya hum useEffect ma function bna skty hayn,  Kya hum useEffect ko ksi function ma use kr skty hyan


