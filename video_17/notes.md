        https://www.youtube.com/watch?v=fHJVWtBW6No&list=PL8p2I9GklV47BCAjiCtuV_liN9IwAl8pM&index=17

## Get Input box value

* Make A div  or any other element
* Make state for hiding and show element
* Make Button
* Update state on button click
* Toggle 
* New Quiz
* Previous Quiz

## Follow first 4 steps

        import React, { useState } from 'react'
        import './App.css';

        function App() {
        const [status, setStatus] = useState(true)

        return (
        <div className="App">
         <h1>Hidden and Showing (Toggle)</h1>

        <button onClick={() => setStatus(false)}> Hide </button>
        <button onClick={() => setStatus(true)}> Show </button>
        {
                status ? //agr status ture hy to <h1>
                <h1>Hello world</h1> :  //nhi to  null
                null
        }
        </div>
        );
        }
        export default App;

## Use Toggle 

        import React, { useState } from 'react'

        function Toggle() {
        let [status, setStatus] = useState(false)

        const toggleStatus = () => {
        setStatus(!status)
        }
        return (
                <div>
                <hr />
                <h1>Use Toggle </h1>

                <button onClick={toggleStatus}>Toggle (Hide & show)</button>

                {
                        status ? (
                        <div>
                                <b>This is paragraph</b>
                                <p>    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, ducimus eos fugiat veniam autem voluptatum? Animi illo alias eveniet sint?</p>
                        </div>) : null
                }

                </div>

        )
        }

        export default Toggle


##
## New Quiz
## kya Jquery ma b react wala method use kr ky Toggle ko use ke a jata hy, Ya phr os ke le a Css ka use ke a jata hy?
Ans: `Jquery ma .toggle() ka use ke a jata hy`


## Previous Quiz
### Jis trhan hum ny input ke value ko access ke kya hum input:checkbox / input:radio ke value ko access kr skty hayn ?
Ans: `YES`

> * `Correct my Ans`
