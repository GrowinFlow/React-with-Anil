import logo from './logo.svg';
import './App.css';
import Users from './Users';

function App() {
  function apple(){
    alert("This is apple alert ")
  }
  return (
    <div className="App">

      <h1>Hello world</h1>
        <button onClick={apple}> Click me 1</button>
        <button onClick={()=>apple()}> Click me 2</button>
        <button onClick={()=>alert("I'm single alert")}> Alert me</button>

        <Users />
    </div>
  );
}

export default App;
