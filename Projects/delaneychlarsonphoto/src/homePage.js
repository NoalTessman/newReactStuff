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
                <div className="HomeLink"><span>Info</span></div>
                <div className="HomeTitle">
                <span id="HomeName">Delaney Chlarson</span>
                <span id="HomeTitles">Portrait<span><div>&</div></span>Family</span> 
                <span id="HomeTitles2">Photography</span>
                </div>
                <div className="HomeLink"><span>Portfolio</span></div>
                <div className="HomeLink"><span>Contact</span></div>
                </div>
            </div>
        )
    }
}
