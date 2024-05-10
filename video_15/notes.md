        https://www.youtube.com/watch?v=uOvsgmIPFP0&list=PL8p2I9GklV47BCAjiCtuV_liN9IwAl8pM&index=15

## Props with class component

* What are props?
* Why use props?
* Use of props
* Example with class compnent
* Update props on Button click
* New Quiz
* Previous Quiz


##  What are props?
* `Jis trha hum function bnaty hyan to , function ko data pass krwany ky le a paameter / arguments ka use krty hayn,` 

## Why use props?
* `jB HUM 1 component sy dosry component ma data bhyjna chaty hyn to propska use krty hayn `

## Create Class component?
* ` Class component bna ny ky le a, sb sy phly react ko import kran hota hy`

        import React from 'react'
* `os ky baad class based component ky le a class and React.Component ka use krna ho ga`

  * `1st` `Student.js`

            import React from 'react'
            class Student extends React.Component {
              render(){
                return(
                  <div>Hello Class</div>
                )
              }
            }
            export default Student;

  * `2nd` `Student.js`

            import React, {Component} from 'react'
            class Student extends Component {
              render(){
                return(
                  <div>Hello Class</div>
                )
              }
            }
            export default Student;
`dono trha he kam krta hy`



## Use of props
* `example` `agr humary pass 50 students hayn os sb ka data webpage py dekhan hy, to hum 1 component bna kr os ma student ka name / data as a props use kr ky component k bar bar / ya phr loop lga yse kr skty hayn.`

`App.js` `use as a component`

            <Student name="Theo" age="43" />
            <Student name="Theo" age="43" others={{addr:"US", no:"*98*****034"}}/>



`Student.js` `create component`

        import React from 'react'
        export class Student extends React.Component {

          render() {
            console.log(this.props)
            return (
              <div>
                <h1>Student Class Component</h1>
                <br />
                <div>Student_Name: {this.props.name}</div>
                <div>Student_age: {this.props.age}</div>
                <div>Student address: {this.props.others.addr}</div>
                <div>Student address: {this.props.others.no}</div>
              </div>

            )
          }
        }



* `line:73, 74` `in use props`,
* `this.` `ka use hum class ky le akrty hyan
* `and use in (line:73,74,) this.props is argument , but .next (.name) is more ideitfire [its- ruff explain]`

* `Hum jetny chahyn otny props use kr skty hayn`

* `Props as aobject ma multiple values b dy skty hayn. (line:46 & 25)

















##
## New Quiz
## Kya props ko change ke a jaskta hy, Jis jga hum os ko receive kr rhy hayn?
Ans: `NO` 
* `hum props ko srif os jga / component ma change kr skty hyan jis jga os ko bnaya gya hy => (Jysy [App.js] ma hum ny props ma value add ke yani hum ny props bnay) ,` 
* ` jis jga Props ko reeceive ke ajata hy wha os ko change nhi ke a ja skta.., (Jysy [Student.js] ma hum props ko receive kr rhy hyn to hum os ke value chage nhi kr skty )`

## kya hum `<Student> HTML</Student>` pass kr skty hyan?
Ans: `yes`


## New Quiz
## Jis trhan hum props ma values pass krty hayn kya hum function b pass kr skty hayn ?
Ans:`Yes`
> * `Correct my Ans`

