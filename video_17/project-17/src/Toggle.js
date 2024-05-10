import React, { useState } from 'react'

function Toggle() {
    let [status, setStatus] = useState(false)

    const toggleStatus = () => {
        setStatus(!status)
    }
    return (
        <div>
            <hr />
            <h1>Use Toggle </h1>

            <button onClick={toggleStatus}>Toggle (Hide & show)</button>

            {
                status ? (
                    <div>
                        <b>This is paragraph</b>
                        <p>    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, ducimus eos fugiat veniam autem voluptatum? Animi illo alias eveniet sint?</p>
                    </div>) : null
            }

        </div>

    )
}

export default Toggle