        https://www.youtube.com/watch?v=p7wZ_4sWZ4s&list=PL8p2I9GklV47BCAjiCtuV_liN9IwAl8pM&index=12


## State in functional component

* What is state
* Use of state
* Define state
* Update state with a Button click
* How state work
* New Quiz
* Previous Quiz



## What is state

* `state basicly 1 object hota hy, jis trha hum variableuse krty ahyn is trha react ma state ko use krty hyan`

  #### `Why use state`

     * `variable change nhi hoty state change ho jaty hyan.`
     * `variable wala code 1 bar clta hy /render hota hy , bs`
     * `Jb hum state ka use krty ayn to code rerender hots hy, jis sy humari updates kam krti hayn` `jysy ya code`
    `Ya code variable ko btn click krny sy changes nhi kr rha `

     `code 2`  
     `(line:31) ka data (line:33) ma update ke aja rha hy, lykin change nhi ho rha` `(line:37) console check krny ky le a hy ky btn pr click krny sy console ma k6h render hota hy`

            function App() {

            let name = "Abdul";
              function updateData() {
                 name = "Theo";
                 alert("My real name is : " + name)

               }
              console.warn("_________________")
              return (
                   <div className="App">
                     <h1>Hello world</h1>
                     <h1>{name}</h1>
                     <button onClick={updateData}> Update data</button>
                     <h1>{name}!</h1>

                    </div>
              );
            }

     `code 1`  
     `(line:53) ma _useState_ ko import ke a gya hy,` ` jo k hock hy,` `(line:56) ma is ko conte ky sath use ke a gya hy state ko 2 name de a gy hayn, useSate ka data first name ky brabr hy, phr (line:59) ma use state ka name  => setData jo ky dosra name tha os ko koi or data de a hy , (line:65, 67)  ma {data} ko use ke a hy, lykin (line:66) ma function  ko call ke a hy Jis ma hum ny state ko dosri value de hy, Btn pr clik krny sy data change/ updat eho jay ga` `React ma sada variables ko update nhi ke ajata`

            import React,{useState} from 'react';
            function App() {

                const [data,  setData] = useState("Theo")

                function updateData(){
                   setData("Theo Marson")
                }
              console.warn("_________________")
              return (
                   <div className="App">
                     <h1>Hello world</h1>
                     <h1>{data}</h1>
                     <button onClick={updateData}> Update data</button>
                     <h1>{data}</h1>

                    </div>
              );
            }















##
## Previous Quiz
## varable ke value change Qu nhi hoi ?
Ans: `variable update krwaty hayn to hmara component rerender nhi hota. Is le a humy state use krna hota hy`
> * `Correct my Ans`


##
## NewQuiz
## ## kya hum 1 component ke State ko, dosry component ma use kr skty hyan same file ma ?
Ans:`Yes, Its useable but if use props`

## useState ke state Public hoti hy ya Private?
Ans: `Private`

