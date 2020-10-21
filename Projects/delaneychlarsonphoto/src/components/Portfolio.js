import React, { Component } from 'react'
import SideBar from "./SideBar"
export default class Portfolio extends Component {
    render() {
        return (
            <div className="PageContainer">
                <SideBar/>
                <div className="PortfolioContainer">
                    Hello
                </div>
            </div>
        )
    }
}
