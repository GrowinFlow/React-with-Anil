import React, {Component } from 'react';
import './App.css';
import Counter from './Counter'

class App extends Component {

  constructor() {
    super();
    this.state={
      data : "Theo",
    }
  }

  updateData() {
    this.setState({data: "Theo Marson"})
  }
  render() {

    return (
      <div className="App">
        <h1>Hello, {this.state.data}</h1>
        <button onClick={()=>this.updateData()}>Update Data</button>

        <hr />
        <Counter />
      </div>
    );
  }

}
export default App;
