        https://www.youtube.com/watch?v=9WdytUmWNKQ&list=PL8p2I9GklV47BCAjiCtuV_liN9IwAl8pM&index=9


## Components in React JS

* What is component?
* Types of componenet?
* Example of component?
* New Quiz 
* Previous Quiz

## What is `component`?
* `A piece of code that can reuse`
* `Such a function`
  * `jysy 1 sum ka function , 2 arguments ly ga or output ma ans dy dyta hy`
* `But more powerful than function`
   * `lykin react ka function / component powerful hota hy, in ke apni life cycle hoti hy, is ke apni (state) hoti hy, is ma (props) aty hayn, parameter ky treky thory alg hoty hayn` `is ma HTML ho skti hy`
*  `Header, Footer is best example`
   * `jysy Header & Footer (website ky hr page pr use hoty hayn, iss le a in ko baar use krny ky le a bnanan prta hyt, lykin as a componets hum is ko 1 bar bna kr 1 sy zyada bar use kr skty hayn )` 

## Component Types?

`Basic 2 types of component` `lykin baki types is in ky andr ati hayn`

* `Functional Component`
* `Class Component`

  * `HOC (Hight Order Component)`
  * `Pure Component`
  * `Controlled Component`
  * `Uncontrolled Component`
  * `Nested Componenet`
  * `e.t.c. and more`

## Use Class Component:
`create`
* `Users.js`
`correct`

        import React,{Component} from 'react'

        export default class Users extends Component {
            render() {
                return(

                    <h1>Hello I'm Class component</h1>
                )
            }
        }   



* `Users.js`
`wrong (error)`


        import React,{Component} from 'react'

        class Users extends Component {
            render() {
                return(

                    <h1>Hello I'm Class component</h1>
                    <h1>Hello I'm Class component</h1>
                )
            }
        }   

        export default Users;

* `Users.js`
`correct`


        import React,{Component} from 'react'

        class Users extends Component {
            render() {
                return(
                    <div>
                        <h1>Hello I'm Class component</h1>
                        <h1>Hello I'm Class component</h1>
                    </div>
                )
            }
        }   

        export default Users;


* `import & reuse`
* `App.js`

       
        import Users from './Users.js';

        function App() {
            return (
                <Users />
                <Users />
            )
        }

        export default App;


## export function?

* `jis component ko hum , ksi or jga use krna chaty hayn iss component ma export use lrty hayn`

* `export`
    * `1`
    
            import React,{Component} from 'react'

            export default class Users extends Component {
                render() {
                    return( 

                        <h1>Hello I'm Class component</h1>
                    )
                }
            }   
 
    
    * `2`

            import React,{Component} from 'react'

            class Users extends Component {
                render() {
                    return( 

                        <h1>Hello I'm Class component</h1>
                    )
                }
            }   
 
            export default Users;  
 


`import`

         import User from './User.js';

         function App(){
            return(
                <Users />
            )
         }

## Nested component?
* `1 component ky ander 1 or component ko bnana `


        function App() {

            function Apple(){
                return(
                   <h1>apple</h1>
                 )
            }

            return (
             <div className="App">
                <Users />
                {Apple()}
                <Apple />
             </div>
             );
        }

        export default App;
  
 

`agr hum ksi component ko ksi jga import nhi krna chaty to hum os ko export he nhi kryn gy`


##
## Previous Quiz
## Kya hum 1 component ma 1 or component bna skty hayn?, agr han to Qu, agr Nhi to Qu?

Ans `Yes use kr skty hayn, Qu k ya 1 nested component hy.

    function Users() {
        function User() {
           return (
               <div>
                    <code >this is code</code>
               </div>
            )
        }

         return (
             <div>
                <User />
                <b>hy</b>
                <h1>user Functional component</h1>
                 <h1> component</h1>
            </div>
        )
    }

    

    export default Users; 

> * `Correct my ans`


##
## Kya 1 he project ma angulr & react ko 1 sath use kr skty hyan?
Ans: `Yes,` `tecnical posible hy lykin is ko use krna ai approch nhi hy is le a ` `No`


