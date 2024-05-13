         https://www.youtube.com/watch?v=RFEEqUrSecQ&list=PL8p2I9GklV47BCAjiCtuV_liN9IwAl8pM&index=24


## Constructor Life Cycle Method
* What is constructor?
* What this is impoertant?
* What we can do in this life cycle method?
* New Quiz
* Previous Quiz



## What this is impoertant?
* `jb hum class component bnaty hayn to hyn render method ky andr return ma HTML b lkhty hyan, os HTML ky ready hony sy phly constructor ready ho jata hy, constuctor ma hum wo kam kr skty hayn jo hum HTML sy phly rady krwana chaty hayn jysy (, koi events ke binding, koi state define krni hy)`


### Use life cycle in class component


#### Create class component and why important super()?

* `Why super() important?

                    import React, {Component} from 'react'
                    export class App extends Component {

                      render() {
                        console.log("no constructor console")
                        return (
                          <div className='App'>
                            <h1>Hello this is class Component</h1>
                          </div>
                        )
                      }
                      constructor(){
                        super()
                        console.log("constructor console")
                      }
                    }
                    export default App

  * `super() ka use parent construtor ko call krny ky le a use ke a jata hy ya JS ka part hy`

  * `(line:35) wala console phly call ho ga qu k wo constructor ma hy , (line:28)render wala console baad ma call ho ga `

  * `is ka fayda ya hy k jb hum state use kr rhy hyan to , agr HTML phly ready ho jay ge to HTML ma jo data state sy ana tha wo ayga nhi to humri website krab ho ge is le a constructor khud he phly load hota hy ky koi iss trha ka msla na ay`

`is trhna`

                constructor(){
                super();
                this.state = {
                  data : "Theo"
                }
                    <h1>Hello {this.state.data}</h1>

`!` `hum kbi b constructor ma (api) ko call nhi krty , Qu k jb tk api ky data ko , functions ko call krny ma time lgy ga ostny ma huri HTML ready nhi ho ge ` is le a (api) ko constructor ma ex:(line:52) ma call nhi krwana `   
`to phr (api) lo kahan call krwana hy?` 
`next video`







##
## Previous Quiz

### Jb hum koi component Page pr show hota hy hum os ko Hide kr ky phr show krwa dyty hyan , to kya humra life cycle whi rhy ga ya phr restart ho ga?
Ans: `Humara life cycle phr restart ho ga`

## New Quiz
### Kya hum constructor ma props ly skty hyan, Qu k porps to parent component sy aty hyan?
Ans: `Yes` `Ya kam krty hayn, Ya Html sy phly render ho jaty hyn`









