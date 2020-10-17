import React, { Component } from 'react'
import NavBar from "../NavBar"

export default class About extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="About">
                    This is where the about page will be
                </div>
            </div>
        )
    }
}
