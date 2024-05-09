import logo from './logo.svg';
import './App.css';
import Users from './Users.js';

function App() {

  function Apple(){
    return(
      <h1>apple</h1>
    )
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Users />
        {Apple()}
        <Apple />

{/*         
        
        <Users />
        
        <Users />
        
        <Users />
        
        <Users /> */}
        
      </header>
    </div>
  );
}

export default App;
