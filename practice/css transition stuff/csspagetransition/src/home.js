import React from 'react'
import {Link} from "react-router-dom"

function HomePage(){

return(
    <div>
        <h1>This is an home page</h1>
        <p>Hello, this is the Home page</p>
        <ul>
        <li>
        <Link to ="/about">
            About
        </Link>
        </li>
        <li>
        <Link to ="/">
            Home
        </Link>
        </li>
        </ul>
    </div>
)
}
export default HomePage