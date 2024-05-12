import React, { Component } from 'react'

class User extends Component {

  constructor(){
    super();
    this.state = {
      name: "Marson"
    }
    console.log("constructor -------------constructor")
  }
  componentDidMount(){
    console.log("componentDidMount------componentDidMount")
  }
  render() {
    console.log("render ------------ render")
    return (
      <div>
        <h1>User component <br /> --   componentDidMount --</h1>

        <h1>Hello  {this.state.name}!</h1>
        <button onClick={()=>{this.setState({name:"Theo"})}}>Update name</button>
       </div>
    )
  }
}

export default User