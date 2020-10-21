import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class homePage extends Component {
    render() {
        return (
            <div className="HomeContainer">
                <div className="HomeHeader">
                <Link to="/About">
                <div className="HomeLink"><span>About</span></div>
                </Link>
                <Link to="/Portfolio">
                <div className="HomeLink"><span>Portfolio</span></div>
                </Link>
                <div className="HomeTitle">
                <span id="HomeName">Delaney Chlarson</span>
                <span id="HomeTitles">Portrait<span><div>&</div></span>Family</span> 
                <span id="HomeTitles2">Photography</span>
                </div>
                <Link to="/Info">
                <div className="HomeLink"><span>Info</span></div>
                </Link>
                <Link to="/Contact">
                <div className="HomeLink"><span>Contact</span></div>
                </Link>
                </div>
            </div>
        )
    }
}
