import React, { Component } from 'react'
import User from './User'
import './App.css'


export class App extends Component {
  constructor(){
    super();
    this.state = {
      show: true
    }
  }
  render() {
    return (
      <div className='App'>
        <h1>App component </h1> 

        <button onClick={()=>this.setState({show:!this.state.show})}>Toggle Child Component</button>
        <hr />
        {
          this.state.show ? <User /> : <h1>Child component remove</h1>
        }
      </div>
    )
  }
}


export default App