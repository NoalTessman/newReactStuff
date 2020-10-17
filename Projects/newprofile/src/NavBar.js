import React, { Component } from 'react'
import {Link} from "react-router-dom"
export default class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <div className="NavName">
                <Link to="/">
                <p>
                Noal Tessman
                </p>
                </Link>
                </div>
                <div className="NavSocialMedia">
                </div>
                <div className="NavLinks">   
                        <div className="NavLink">    
                            <Link to="/About">About</Link></div>    
                        <div className="NavLink">
                            <Link to="/Projects">Projects</Link></div>    
                        <div className="NavLink">
                            <Link to="/Tools">Tools I Use</Link></div>    
                        <div className="NavLink">
                            <Link to="/Contact">Contact</Link></div>
                </div>
            </div>
        )
    }
}
