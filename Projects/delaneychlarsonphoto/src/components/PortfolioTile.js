import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class PortfolioTile extends Component {
    render() {
        const link = `./Portfolio/${this.props.title}`
        return (
            <div className="PortfolioTileContainer" id={this.props.title}>
                <Link to={link}>
                    <div>
                        <span>
                            {this.props.title}
                        </span>
                    </div>
                </Link>
            </div>
        )
    }
}
