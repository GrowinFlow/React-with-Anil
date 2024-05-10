        https://www.youtube.com/watch?v=4PFX52Qmqv8&list=PL8p2I9GklV47BCAjiCtuV_liN9IwAl8pM&index=20

## Function as a Props

* `Pass Function as Props`
* `How to create function in parent component and use in child component?`
* `Why use function as a props?`

    * `hum (App.js) ma function bna kr , s ko child component (User.js) ma call krwa skty hayn`,

### How to create function in parent component and use in child component?
`App.js`

        export default function App() {

        function getData(){
        alert("Hi, Iam alert, I Live in App.js")
        }
        return (
        <div className="App">
        <h1> function as a props</h1>
     
        <hr />
        <User data={getData}/>

        </div>
        );
        }
`(line:15) ma hum ny function bna kr , (line:22) ma child component ma as a props use ke a`

`User.js`

        export default function User(props) {
          return (
            <div>
                <h1>User Component</h1>

                <button onClick={props.data}>Call Data Function</button>
            </div>
          )
        }       
`(line:37) ma btn ky onClick pr hum ny funtion ko as a props set ke a`




### Why use function as a props?

* `humy kbi kbi boht sary component bnany prty hyn , onn sb ma 1 he function ko use b krna hota hyy to hum is trha kam krty hyn`, `is sy km code ma zyda kam ho jta hy ` `agr kbi chages krni hon to b asani hti hy`


