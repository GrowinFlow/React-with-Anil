import React, { Component } from 'react'

class User extends Component {

  constructor(){
    super();

    console.log("constructor -------------constructor")
  }

  componentWillUnmount(){
    console.log("  componentWillUnmount call")
  }




  render() {
    console.log("render ------------ render")
    return (
      <div>
        <h1>User component <br /> --   shouldcomponentUpdate --</h1>

        <h1>This is Use component  </h1>

       </div>
    )
  }
}

export default User