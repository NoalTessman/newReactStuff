import React, { Component } from 'react'
import SideBar from "./SideBar"

export default class contact extends Component {
    render() {
        return (
            <div className="PageContainer">
                <SideBar/>
                <div className="ContactContainer">
                Contact Page Here
                </div>
            </div>
        )
    }
}
