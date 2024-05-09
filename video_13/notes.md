        https://www.youtube.com/watch?v=VLsccuwbJOQ&list=PL8p2I9GklV47BCAjiCtuV_liN9IwAl8pM&index=13


## State in Class component

* What is state
* make Class Component
  * functional compnent to class component
* Define state
* Update state with a Button click
* How state work
* New Quiz
* Previous Quiz



## What is state

* `state basicly 1 daa container hota hy, jis trha hum variable use krty ahyn is trha react ma state ko use krty hyan, is ma hum dat astore krwa skty hayn`

## How make Class Component
  ### functional compnent to class component

`functionol component`

          import React from 'react'
          function App() {
            return (
              <div className="App">

                <h1>Hello world</h1>
              </div>
            );
          }

        export default App;

        

`class component`

    import React, {Component} from 'react'
    class App extends Component {

      render() {

        return (
          <div className="App">
           <h1>Hello world</h1>
         </div>
       );
      }
    }
    export default App;
`some changes in functionaal component`


## Class component in use State:

`Jb b hum koi functional component bnaty hyan to (this) ka use nhi kr ty`

    class App extends Component {

      constructor() {
        super();
        this.state={
          data : "Theo",
        }
      }

      render() {

      return (
        <div className="App">
          <h1>Hello, {this.state.data}</h1>
        </div>
      );
      }
    }
    export default App;
`(line:64 to 69), wala constructor 99% bna nprta hy. or os ma super() ka use b krna prta hy`












##
## Previous Quiz
## ## kya hum 1 component ke State ko, dosry component ma use kr skty hyan same file ma ?
Ans:`Yes, Its useable but if use props`

## useState ke state Public hoti hy ya Private?
Ans: `Private`

> * `2 Wrong my Ans`

##
## New Quiz
## Kya class component ma useState la use kr skty hayn?
Ans: `NO` `hum useSate ka use class component ma nhi kr skty, agr humy state ka use krna hy to  (this.state ) ka use kr skty yan,  `
`Functional component ma useState ka use,  state ko mange krny ky le a hota hy.