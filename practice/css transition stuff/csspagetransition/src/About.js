import React from 'react'
import { Link } from "react-router-dom"
function About(){

return(
    <div>
        <h1>This is an about page</h1>
        <p>Hello, this is the About page
        </p>
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
export default About