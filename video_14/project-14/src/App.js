import React, {useState} from 'react'
import './App.css';
import Student from './Student';


function App() {
  // Define initial student data
  const data = {
    cId: "#01",
    name: "Theo",
    age: "23",
    gender: "male",
    email: "theo@edu.com",
    phone: "+15033*****9",
    others: {
      address: "Uk",
      friend: "No"
    }
  };

  // Define state variable to store student data
  const [studentData, setStudentData] = useState(data);

  // Function to update student data
  function updateData() {
    // Update state with a new object to trigger re-render
    setStudentData({
      cId: "#02",
      name: "Marson",
      age: "27",
      gender: "male",
      email: "marson@edu.com",
      phone: "+10132*****9",
      others: {
        address: "US",
        friend: "Yes"
      }
    });
  }

  return (
    <div className='App'>

      <h1>Props in react</h1>
      <h1>Student List</h1>
      <br />

      {/* <Student cId="#01" name="Theo" age="32" gender="male" email="theo@edu.com" phone="+9234*****6" others={{address: "Pk", friend: "No"}}  /> */}
      <Student
  cId={studentData.cId}
  name={studentData.name}
  age={studentData.age}
  gender={studentData.gender}
  email={studentData.email}
  phone={studentData.phone}
  others={studentData.others}
/>

      <hr />
      <button onClick={updateData}>Update Student</button>

    </div>
  )
}

export default App;