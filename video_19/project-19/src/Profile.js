import React, { useState } from 'react'

export function Profile() {

    const [loggedIn, setLoggedIn] = useState(true)

    function logOut() {
        setLoggedIn(false)
    }
    return (
        <div>
            {
                loggedIn ? <h1>Welcom | You are login</h1> : <h2>404</h2>
            }
            <button onClick={logOut}>Log out</button>
        </div>
    )
}



export function Profile2() {
    const [logIn, setLogIn] = useState(1)
    return (
        <div>
            {                // ternary operator
                logIn === 1 ? <h1>Welcom | User 1</h1> 
                : logIn === 2 ? <h1>Hi | User 2</h1> 
                : logIn === 3 ? <h1>Hello | User 3</h1> 
                : <h1>404</h1>
            }
            <button onClick={() => setLogIn(1)}>Login User 1</button>
            <button onClick={() => setLogIn(2)}>Login User 2</button>
            <button onClick={() => setLogIn(3)}>Login User 3</button>
            <button onClick={() => setLogIn(false)}>Log out</button>
        </div>
    )
}
