        https://www.youtube.com/watch?v=xPiph9AYYRw&list=PL8p2I9GklV47BCAjiCtuV_liN9IwAl8pM&index=27


## ComoponentDidUpdate, Life Cycle Method
#### 5W's 
* Why use ComoponentDidUpdate?
* Use of ComoponentDidUpdate method
* Make class component
* Use with of state and props
* Previous Props and State
* New Quiz
* Previous Quiz



## See Lifecycle img

       life-cycle.png

## Why use?
`is ka use api ma iss le a hota hy ky agr koi ches render ma hy to wo re-load /render hoti hy -agr ap render ma hoge to bar bar load hony sy client request yda jany sy server down ho jay ga , agr construtor ma ho ge to HTML sy phly he call ho jay ke is le a`

         componentDidUpdate(){
           console.log("componentDidUpdate------componentDidUpdate")
         }
`iss trha constructor DidUpdate ma use kry gy`


## componentDidUpdate() kb cly ga ?
* `jb b koi new / update Props`
* `jb b koi new / update State`
  * ` agr 4 states hayn to 4ron ky apdate pr cly ga `

* `Pge reload hony pr nhi cly ga, Jb koi state update ho ge srif od time cly ga`
`ex:`


        import React, { Component } from 'react'

        class User extends Component {
        
          constructor(){
            super();
            console.log("constructor -------------constructor")
          }
          componentDidUpdate(){
            console.log("componentDidUpdate------componentDidUpdate")
          }
          render() {
            console.log("render ------------ render")
            return (
              <div>
                <h1>User component <br /> --   componentDidUpdate --</h1>j
               </div>
            )
          }
        }

        export default User
`jb page reload hoga ya load hoga to srif constructor and render wala console cly ga, lykin jb Btn pr click ho ga to state update ho ge jis sy componentDidUpdate() cly ga`



## kya kya use krna hy?
* `is ky ander agr koi state change krwani ho to condayion ky andr krwani ho gi wrna jb b koi props / state update ho ge to phly wali state ko phr update ke a jay ga jis sy wo loop ke trhan clti jay ge`


        class User extends Component {

          constructor(){
            super();
            this.state = {
              counter: 0
            }
            console.log("constructor -------------constructor")
          }

          componentDidUpdate(preProps, preState, snapshot){
            console.log("componentDidUpdate------componentDidUpdate", preState.counter, this.       state.counter)
            // if(preState.counter === this.state.counter){
            //   alert("data is already same")
            // }
              if(this.state.counter<10){
                  this.setState({counter:this.state.counter+1})
                }
            }

         render() {
           console.log("render ------------ render")
           return (
             <div>
               <h1>User component <br /> --   componentDidUpdate --</h1>

               <h1>This is counter:   {this.state.counter}!</h1>
               <button onClick={()=>{this.setState({counter:1})}}>Update counter</button>
              </div>
           )
         }
        }



## snapshot

        componentDidUpdate(preProps, preState, snapshot){
          console.log("componentDidUpdate------componentDidUpdate", preState.counter, this.state.counter)
         console.log("This is snapshot", snapshot)
        }

`snapshot humy undefined return krta hy, `` agr hum ny phly getSnapshotBeforeUpdate() method use ke a hy to ya os ke value dy ga wrna ya undefined he a ga,`` is pr alg video ay ge`



 ### Kya  hum componentDidMount() ko call hony sy rook skty hayn?
ans:` Yes` `agr shouldComponentUpdate() method false return kr dy ga to ya cly ga he nhi`






##
## Previous Quiz
## kya 1 function ky ander 1 sy zyada render method ho skty hyan, ya phhr hum 1 render ky ander 1 or reder ka use kr skty hyan?
Ans: `No ` `agr render ky baad phr render() nayn gy to second render() cly ga, yani end wal arender srif``or agr render( render()) bnaty hyn to error`

## New Quiz
### Kya  hum componentDidUpdate() ma Api  call kr skty hayn?
ans:
*` Yes` `agr hum os api ko use he ksi btn sy krwana chaty hayn`
* `Agr hum os Api ko condation ma use kr rhy hayn to koi msla nhi`
* `NO` `nhi Qu k jb b koi chez update ho g to  componentDidUpdate()  cly ga jis sy ya bar bar call ho ge `






<!-- >   * `Correct my ans` -->








