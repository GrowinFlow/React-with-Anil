import React, {useState} from 'react'
import "./App.css";

function Login() {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [userErr, setUserErr] = useState(false)
    const [passErr, setPassErr] = useState(false)

    function loginHanble(e) {
        if(user> 12 || password<8){
            alert("Please fill vaild value :("); 
            e.preventDefault()
        }
        else{
            alert("Welcome | Alls good :)")
        }
    }

    function userHandler(e){
        let item = e.target.value.length;
        if(item > 12){
            setUserErr(true)
        }
        else{
            setUserErr(false)
        }
        setUser(item)
    }
    function passwordHandler(e){
        let item = e.target.value.length;
        if(item < 8){
            setPassErr(true)
        }
        else{
            setPassErr(false)
        }setPassword(item)
    }
  return (
    <div>
        <h1>Login</h1>

        <form onSubmit={loginHanble}>

        <input type='text' placeholder='enter User Id' onChange={userHandler} />{userErr?<small>User name is too Long!</small>:""}
        <br /> <br />
        <input type='password' placeholder='enter User Password' onChange={passwordHandler} />{passErr?<small>Your Password is too Weak,<br /> maximum 8 letter!</small>:""}
        <br /> <br />
        <button type='submit'>Login</button>

        </form>
    </div>
  )
}

export default Login