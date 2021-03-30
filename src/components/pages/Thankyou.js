import React from 'react'
import {Link} from "react-router-dom"
function Thankyou() {
    return (
        <div>
            
            <h1>Thank you for Submission</h1>
            <Link to="/">
                <button className="btn btn-danger btn-lg">Back to Home</button>
            </Link>
        </div>
    )
}

export default Thankyou;