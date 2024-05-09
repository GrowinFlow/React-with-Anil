        https://www.youtube.com/watch?v=tmt7lf2nCBY&list=PL8p2I9GklV47BCAjiCtuV_liN9IwAl8pM&index=11


## Click Event and Function

* How to make click event
* Call function in the button click
* Variable in functional Component
* New Quiz
* Previous Quiz

* `react khta hy ky functional component zyada use kro`



## How to make click event

* `1`
  *`Wrong`, `(line:29)`
  * `App.js`

            function App() {
              function apple(){
                alert("This is apple alert ")
                  }
                return (
                  <div className="App">
                     <h1>Hello world</h1>
                     <button onClick={apple() }> Click me</button>
                  </div>
                 );
             }
            export default App;
`is trhan function bna kr jb hum nutton ky onClick sy funtion ko call kr wa rhy hayn (' <button onClick={apple() }> ' )  to function page reload hony pr call hoty ja rha hy, lykin hum to is ko btn pr click krny sy call krwan achaty hyan`?   
  
* `2`
  * `Correct`, `(line:47)`
    * `App.js`

            function App() {
              function apple(){
                alert("This is apple alert ")
                  }
                return (
                  <div className="App">
                     <h1>Hello world</h1>
                     <button onClick={apple }> Click me</button>
                  </div>
                 );
             }
            export default App;
                
`(' <button onClick={apple}> ' ) , function ko is trha call krny sy to automatic / page reload hony pr call nhi ho ga`


* `3`
  * `Correct`, `(line:67)`
  * `App.js`

            function App() {
              function apple(){
                alert("This is apple alert ")
                  }
                return (
                  <div className="App">
                     <h1>Hello world</h1>
                     <button onClick={()=>apple()}> Click me</button>
                  </div>
                 );
             }
            export default App;

`agr hum brect () ka krna chaty yan to humay Arrow function ka use krna ho ga,`
`agr alert('hello') ka b use krty hayn to  ya page reload hony pr auto call ho jay ka is le a is ko b`  

    <button onClick={()=>alert('hello')}> Click me</button>

`iss trha use krny gy`



##  Variable in functional Component

* `code`
  * `focus on: (line:91,92,94,95,101,102)`
              
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
              </b>
            )
          }
`is ma hum variables bna kr os ko function an HTML ma use kr rhy hayn`
`Lykin Btn pr click hony sy variable change  hi ho rha (globali)`?



##
## New Quiz
## varable ke value change Qu nhi hoi ?
Ans: `Let , Block scope hota y , is le a ,`
`is le a hum hocks ka use krty hyan`



##
## Previous Quiz
## ## kya React ko Angulr ky sath use kr skty hayn?
Ans:`Yes, Qu k react library hy, library ko ksi b Framework ky sath use kr skty hyan`
`is ko hum angulr ky sath se kr skty hayn, Next.js ky sath, e.t.c.`

> * `Correct my Ans`
