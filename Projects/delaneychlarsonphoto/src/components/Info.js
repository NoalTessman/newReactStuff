import React, { Component } from 'react'
import SideBar from "./SideBar"

export default class Info extends Component {
    render() {
        return (
            <div className="PageContainer">
                <SideBar/>
                <div className="InfoContainer">
                For Pricing,
                contact me and we can work something out
                </div>
            </div>
        )
    }
}
