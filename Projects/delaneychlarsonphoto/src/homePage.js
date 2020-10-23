import React, { Component } from 'react'
import HamburgerMenu from 'react-hamburger-menu'
import {Link} from "react-router-dom"

export default class homePage extends Component {
    render() {
        return (
            <div className="HomeContainer">
                <div className="HomeHeader">
                <Link to="/About" id="HomeLinkGrid">
                <div className="HomeLink"><span>About</span></div>
                </Link>
                <Link to="/Portfolio" id="HomeLinkGrid">
                <div className="HomeLink"><span>Portfolio</span></div>
                </Link >
                <div className="HomeTitle">
                <span id="HomeName">Delaney S Chlarson</span>
                <span id="HomeTitles">Portrait<span><div>&</div></span>Family</span> 
                <span id="HomeTitles2">Photography</span>
                </div>
                <Link to="/Info" id="HomeLinkGrid">
                <div className="HomeLink"><span>Info</span></div>
                </Link>
                <Link to="/Contact" id="HomeLinkGrid">
                <div className="HomeLink"><span>Contact</span></div>
                </Link>
                </div>
            </div>
        )
    }
}
