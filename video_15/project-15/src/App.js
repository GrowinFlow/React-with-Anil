import React, {Component} from 'react'
import './App.css';
import {Student} from './Student';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Mr.Hing",
      age: "25",
      others: {
        addr: "China",
        no : "+80213*********31"
      }
    }
  }
  render(){

    return (
      <div>
        <h1>App Functional Component</h1>
        <hr />
        <Student name={this.state.name} age={this.state.age} others={{addr:this.state.others.addr, no:this.state.others.no}}/>
        <Student name="Marson" age="23" others={{addr:"UK", no:"+43*****028"}}/>
  
        <button onClick={()=>{
          this.setState({
            name: "Mr.Chon",
            age: "34",
            others: {
              addr: "China",
              no : "+893273*********31"
            }
          })
        }}>updateData</button>
      </div>
      
    )
  }
}

export default App;