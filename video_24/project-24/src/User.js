import React, { Component } from 'react'

export class User extends Component {
    constructor(){
        super();
        this.state = {
            email: "theo@gmail.com"
        }
    }
  render() {;
    let i = 1
    console.log("Render method call in User " ,i)
    return (
      <div>
        <h1>This is User component</h1>
        <br />
        <h3>Hello {this.props.name}!</h3>

        <h4>Your email: {this.state.email}</h4>
        <button onClick={()=>this.setState({email:"marson@gmail.com"})}>Update state || update email in User component</button>
      </div>
    )
    
  }

}

export default User