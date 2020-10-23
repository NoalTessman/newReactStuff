import React, { Component } from 'react'
import {Link} from "react-router-dom"
import About from './About'
import HamburgerMenu from "react-hamburger-menu"

export default class SideBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isOpen:true
        }
    }
    handleClick() {
        this.setState({
            open: !this.state.open
        });
    }
    render() {
        
        
        return (
            <div className="NavBar">
                <Link to="/">
                    <div className="NavBarTitle">
                
                        <span id="NavBarTitleTop">DC</span>
                        <span id="NavBarTitleMiddle">Portrait <span>&</span> Family</span>
                        <span id="NavBarTitleBottom">Photography</span>
                    </div>
                </Link>

                <div className="NavBarLinks">
                    <Link to="/About">
                        <p>
                        About
                        </p>
                    </Link>
                    <Link to="/Info">
                        <p>
                        Info
                        </p>
                    </Link>
                    <Link to="/Portfolio">
                        <p>
                        Portfolio
                        </p>
                    </Link>
                    <Link to="/Contact">
                        <p>
                        Contact
                        </p>
                    </Link>
                    {/* <div className="NavLinkHamburger">
                        <HamburgerMenu
                        isOpen={this.state.open}
                        menuClicked={this.handleClick.bind(this)}
                        width={18}
                        height={15}
                        strokeWidth={1}
                        rotate={0}
                        color='black'
                        borderRadius={0}
                        animationDuration={0.5}/>
                    </div> */}
                </div>
            </div>
        )
    }
}
