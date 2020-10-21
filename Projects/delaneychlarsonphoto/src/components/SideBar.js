import React, { Component } from 'react'
import {Link} from "react-router-dom"
import About from './About'
export default class SideBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <Link to="./">
                    <div className="NavBarTitle">
                
                        <span id="NavBarTitleTop">DC</span>
                        <span id="NavBarTitleMiddle">Portrait <span>&</span> Family</span>
                        <span id="NavBarTitleBottom">Photography</span>
                    </div>
                </Link>

                <div className="NavBarLinks">
                    <Link to="./About">
                        <p>
                        About
                        </p>
                    </Link>
                    <Link to="./Info">
                        <p>
                        Info
                        </p>
                    </Link>
                    <Link to="./Portfolio">
                        <p>
                        Portfolio
                        </p>
                    </Link>
                    <Link to="./Contact">
                        <p>
                        Contact
                        </p>
                    </Link>
                </div>
            </div>
        )
    }
}
