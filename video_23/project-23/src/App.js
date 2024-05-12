
import './App.css';
import UseInConstructor from './UseInConstructor';

import React, {Component} from 'react'
export class App extends Component {

  constructor(){
    super();
    this.state = {
      
      data : "Theo"
    }
    
  }
  

  render() {
    console.log("no constructor console")
    return (
      <div className='App'>
        <h1>Hello this is App Component</h1>
        <h1>Hello {this.state.data}</h1>
        <hr />
        <UseInConstructor name="UnKnon" />
      </div>
    )
  }

}
export default App