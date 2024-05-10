import React, {useState} from 'react'
function NotRecommended() {

    const [loggedIn, setLoggedIn] = useState(true)

    if(loggedIn) {
      return (
        <div>
          <h1> Welcome Page {setLoggedIn}</h1>
        </div>
      );
    }
    else{
        return (
            <div>
              <h1> 404</h1>
            </div>
          );
    }
}

export default NotRecommended