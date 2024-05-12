import React, {Component} from 'react'

export class UseInConstructor extends Component {

  constructor(props){
    super(props);
     let a = this.props.name
    this.state = {
      
      data : "Theo"
    }
   let c = a + this.state.data
   this.c = c
  }
  

  render() {
    console.log("no constructor")
    return (
      <div>
        <h1>Hello this is  UseInConstructor  Component</h1>
        <h1>Hello {this.state.data}  {this.c}</h1>
      </div>
    )
  }

}
export default UseInConstructor


