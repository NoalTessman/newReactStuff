import React, { Component } from 'react'
import SideBar from "./SideBar"
import PortfolioTile from "./PortfolioTile"
export default class Portfolio extends Component {
    render() {
        return (
            <div className="PageContainer">
                <SideBar/>
                <div className="PortfolioContainer">
                    <PortfolioTile title="Portrait"/>
                    <PortfolioTile title="Family"/>
                    <PortfolioTile title="Business"/>
                </div>
            </div>
        )
    }
}
