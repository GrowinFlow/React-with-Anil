import React from 'react'
import './Student.css';

export class Student extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Student Class Component</h1>
        <br />
        <ul>

        <li>Student_Name: {this.props.name}</li>
        <li>Student_age: {this.props.age}</li>
        <li>Student address: {this.props.others.addr}</li>
        <li>Student address: {this.props.others.no}</li>
        </ul>
      </div>

    )
  }
}


