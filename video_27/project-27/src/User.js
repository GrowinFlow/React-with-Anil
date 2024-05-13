import React, { Component } from 'react'

class User extends Component {

  constructor(){
    super();
    this.state = {
      counter: 0
    }
    console.log("constructor -------------constructor")
  }
  componentDidUpdate(){
    console.log("componentDidUpdate-------------componentDidUpdate")
    
  }

  shouldComponentUpdate(){ 
    console.warn("shouldcomponentUpdate-----------------shouldcomponentUpdate", this.state.counter)
    // if(this.state.counter>5 && this .state.counter<10){
    //   return true;
    // }
    // return false;
    if(this.state.counter<10){
      return true;
    }
  }


  render() {
    console.log("render ------------ render")
    return (
      <div>
        <h1>User component <br /> --   shouldcomponentUpdate --</h1>

        <h1>This is counter:   {this.state.counter}!</h1>
        <button onClick={()=>{this.setState({counter:this.state.counter+1})}}>Update counter</button>
       </div>
    )
  }
}

export default User