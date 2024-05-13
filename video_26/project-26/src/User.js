import React, { Component } from 'react'

class User extends Component {

  constructor(){
    super();
    this.state = {
      counter: 0
    }
    console.log("constructor -------------constructor")
  }

  componentDidUpdate(preProps, preState, snapshot){
    console.log("componentDidUpdate------componentDidUpdate", preState.counter, this.state.counter)
  //   if(preState.counter === this.state.counter){
  //     alert("data is already same")
  //  }
   if(this.state.counter<10){
    this.setState({counter:this.state.counter+1})
   }
   console.log("This is snapshot", snapshot)
 }

  render() {
    console.log("render ------------ render")
    return (
      <div>
        <h1>User component <br /> --   componentDidUpdate --</h1>

        <h1>This is counter:   {this.state.counter}!</h1>
        <button onClick={()=>{this.setState({counter:1})}}>Update counter</button>
       </div>
    )
  }
}

export default User