import React from 'react'
import './Student.css';


function Student(props) {
    console.log(props)
    return (
        <div>
          <br />
          <div className="listContainer">

            <ul>
                <li>College id : {props.cId}</li>
                <li>Name : {props.name}</li>
                <li>Age : {props.age}</li>
                <li>Gender : {props.gender}</li>
                <li>Email : {props.email}</li>
                <li>Phone no : {props.phone}</li>
                <li>Others : {props.others.address}</li>
                <li>Friends : {props.others.friend}</li>
            </ul>
          </div>

        </div>
    )
}

export default Student;