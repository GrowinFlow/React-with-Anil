         https://www.youtube.com/watch?v=BCslNEYCRXc&list=PL8p2I9GklV47BCAjiCtuV_liN9IwAl8pM&index=25


## ComponentDidMount, Life Cycle Method
#### 5W's 
* Why use ComoponentDidMount?
* Use of ComoponentDidMount method
* Make class component
* NO effect of state and props
* New Quiz
* Previous Quiz



## See Lifecycle img

       life-cycle.png
## Why use?
`is ka use api ma iss le a hota hy ky agr koi ches render ma hy to wo re-load /render hoti hy -agr ap render ma hoge to bar bar load hony sy client request yda jany sy server down ho jay ga , agr construtor ma ho ge to HTML sy phly he call ho jay ke is le a`

         componentDidMount(){
           console.log("componentDidMount------componentDidMount")
         }
`iss trha constructor DidMount ma use kry gy`


## ComoponentDidMount  kb call hota hy?
* `Jb component Mount ho jata hy tb clta hy` `Mount mean=>  ready HTML component`
* `Sb sy phly constructor , phr render, phr ComoponentDidMount call hota hy` `ya os time load hota hy jb humara HTML Dom wgyra sb load ho jata hy,



        import React, { Component } from 'react'

        class User extends Component {
        
          constructor(){
            super();
            console.log("constructor -------------constructor")
          }
          componentDidMount(){
            console.log("componentDidMount------componentDidMount")
          }
          render() {
            console.log("render ------------ render")
            return (
              <div>
                <h1>User component <br /> --   componentDidMount --</h1>j
               </div>
            )
          }
        }

        export default User




## Kya Kya chez  ComoponentDidMount ma render krwany gy?

* `koi b (Api) call krwai ho to is call krwani hy, HTML ka koi b aysa component jo humy Hide--Show krwana ho wo iss ma ay ga, Koi b aysa component jo HTML ka ho,`












##
## New Quiz
## kya 1 function ky ander 1 sy zyada render method ho skty hyan, ya phhr hum 1 render ky ander 1 or reder ka use kr skty hyan?
Ans: `No ` `agr render ky baad phr render() nayn gy to second render() cly ga, yani end wal arender srif``or agr render( render()) bnaty hyn to error`

## New Quiz
### Kya  hum componentDidMount() ma stste chnage krwa skty hayn?
### Kya render() ky andr state ko update krwana cheyi?
Ans: `No`







<!-- >   * `Correct my ans` -->








