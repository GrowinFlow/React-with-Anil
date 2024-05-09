        https://www.youtube.com/watch?v=mpK8M4uJi-4&list=PL8p2I9GklV47BCAjiCtuV_liN9IwAl8pM&index=15

## Props with Functional component

* What are props?
* Use of props
* Example with functional compnent
* Update props on Button click
* New Quiz
* Previous Quiz


##  What are props?
* `Jis trha hum function bnaty hyan to , function ko data pass krwany ky le a paameter / arguments ka use krty hayn,` `ise trhan agr hum koi component bnaty hyan to hum os ko data pass krwany ky le aprops ka use krty hayn.` `props ko parameter sy relate ke a ja skta hy only Imagine`   
`props full form (properties) hota hy`


## Use of props
* `example` `agr humary pass 50 students hayn os sb ka data webpage py dekhan hy, to hum 1 component bna kr os ma student ka name / data as a props use kr ky component k bar bar / ya phr loop lga yse kr skty hayn.`

`App.js` `use as a component`

      <Student cId="#01" name="Theo" age="32" gender="male" email="theo@marson.com" phone="+9234*****6" />

      <Student cId="#01" name="Theo" age="32" gender="male" email="theo@marson.com" phone="+9234*****6" others={{address: 'punjab', friend: "No"}} />



`Student.js` `create component`

        import React from 'react'

        function Student(props) {
            console.log(props)
            return (
                <div>
                  <div className="listContainer">
                    <ul>
                        <li>College id : {props.cId}</li>
                        <li>Name : {props.name}</li>
                        <li>Age : {props.age}</li>
                        <li>Gender : {props.gender}</li>
                        <li>Email : {props.email}</li>
                        <li>Phone no : {props.phone}</li>


                        <li>Others : {props.others.address}</li>
                        <li>Friends : {props.others.friend}</li>
                    </ul>
                  </div>
                </div>
            )       
        }
        export default Student;
* `line:30` `in use function argument / props`,
* `and use in (line:35) props is argument , but .next (.name) is more ideitfire [irs- ruff explain]`
* `Hum jetny chahyn otny props use kr skty hayn`

* `Props as aobject ma multiple values b dy skty hayn. (line:46 & 25)








##
## Previous Quiz
## Kya class component ma useState la use kr skty hayn?
Ans: `NO` `hum useSate ka use class component ma nhi kr skty, agr humy state ka use krna hy to  (this.state ) ka use kr skty yan,  
`Functional component ma useState ka use,  state ko mange krny ky le a hota hy.`

> * `Correct my Ans`

## New Quiz
## Jis trhan hum props ma values pass krty hayn kya hum function b pass kr skty hayn ?
Ans:`Yes`

