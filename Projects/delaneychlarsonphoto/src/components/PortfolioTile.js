import React, { Component } from 'react'

export default class PortfolioTile extends Component {
    render() {
        return (
            <div className="PortfolioTileContainer" id={this.props.title}>
                <div>
                    <span>
                {this.props.title}
                </span>
                </div>
            </div>
        )
    }
}
