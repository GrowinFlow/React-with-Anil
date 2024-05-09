import logo from './logo.svg';
import './App.css';
import Users from './Users';
import NoJsx from './NoJsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

<Users />
<NoJsx />
      </header>
    </div>
  );
}

export default App;
