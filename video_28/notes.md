        https://www.youtube.com/watch?v=kpqZ8o3kPk8&list=PL8p2I9GklV47BCAjiCtuV_liN9IwAl8pM&index=28


##  componentWillUnmount(), Life Cycle Method
#### 5W's 
* When component will unmount called?
* Example of component will unmount?
* Use of component will unmount?
* New Quiz
* Previous Quiz



## See Lifecycle img

       life-cycle.png

## Why use?
`componentWillUnmount() life cycle ma updates ma ata hy`,
`is ka use ksi b step ko STOP krny ky le a hota hy, is pr hum condition lga skty hyan`
`yani hum ksi b state ke rendrering rook skty hyan`


        componentWillUnmount(){
          console.log("  componentWillUnmount call")
        }



## componentWillUnmount() kb cly ga ?
* `Jb b humra component DOM sy remove ho ga, tb tb ''shouldComponentUpdate()'' call ho ga `


`Hum React ma agr ksi component ko HIDE krna chaty hyn to , hum os ma css=>(class="hidden"), ka use nhi krty , blky hum os component ko DOM sy he remove kr jaty hayn jis sy page ke speed a6i hoti hy`





##
## new Quiz
### Kya componentWillUnmount() phly clta hy ya component remove hony ky baad clta hy?
Ans: `component remove hony ky baad clta..`



## Quiz
## Agr humara Parent Component Funcional based hy and Child component Class based component hy to kya ya cly ga?
ans: `Yes ya cly ga,` `Zrori ya hy ky jis component ma hum componentWillUnmount() use kr rhy hyan wo Class based component hona chayi.`






