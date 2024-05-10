        https://www.youtube.com/watch?v=EAvn81qplUk&list=PL8p2I9GklV47BCAjiCtuV_liN9IwAl8pM&index=8


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

## Use Functional Component:
`create`
* `Users.js`
`correct`

        function Users() {
                 return (
                    <h1>user Functional component</h1>
              )
          }
        export default Users; 


* `Users.js`
`wrong (error)`

        function Users() {
                 return (
                    <h1>user Functional component</h1>
                    <h1>user Functional </h1>
              )
          }
        export default Users; 

* `Users.js`
`correct`

        function Users() {
                 return (
            <div>
                 <h1>user Functional component</h1>
                 <h1> component</h1>
            </div>
              )
          }
        export default Users; 


`import & reuse`
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

`export`
    
        function Users(){
            return(
                <h1>Hy</h1>
            )
        }
        export default Users;   


`import`

         import User from './User.js';

         function App(){
            return(
                <Users />
            )
         }

# ------------------------
### `export & import 2 type:`

* `School.js` `1`

            function School(){
                return(
                    HTML
                )
            }
            export default School;
* `App.js`
 
        import School from './School.js';

         <School /> 
        <School> </School>

* `Schools.js` `2`

            export function Student(){
                return(
                    HTML
                )
            }

            export function Teacher(){
                return(
                    HTML
                )
            }

* `App.js`
 
        import {Student, Teacher} from './School.js';

         <Teacher /> 
        <Student> </Student>


# ------------------------
##
`agr hum ksi component ko ksi jga import nhi krna chaty to hum os ko export he nhi kryn gy`


##
## New Quiz
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