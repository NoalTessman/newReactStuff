import React, { Component } from 'react'
import {Link} from "react-router-dom"
import HamburgerMenu from 'react-hamburger-menu'

function MenuItem(props) {
    return(
    <Link to={props.Link}>
        <div className ="MenuLink">
            {props.Page}
        </div>
    </Link>
    )
}
export default class Menu extends Component {
    render() {
        return (
            <nav>
                <div className="Menu">

                    <div className="MenuLinks">
                        <MenuItem Link="/About" Page="About"/>
                        <MenuItem Link="/Info" Page="Services"/>
                        <MenuItem Link="/Portfolio" Page="Portfolio"/>
                        <MenuItem Link="/Contact" Page="Contact"/>
                    </div>
                </div>
            </nav>
        )
    }
}
