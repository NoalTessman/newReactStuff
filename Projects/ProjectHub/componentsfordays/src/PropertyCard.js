import React, { Component } from 'react'
export default class PropertyCard extends Component {
    render() {
        return (
            <div className="bg-white rounded-lg overflow-hidden m-6" id="Card">
                <img src={this.props.picture}/>
                <div className="p-6">
                    <div className="text-gray-600 text-xs">{this.props.beds} Bed/s {this.props.baths}  Bath/s</div>
                    <div className="font-bold text-lg tracking-wide mt-2 mb-2">{this.props.title}</div>
                    <div className="mb-2 text-sm">{this.props.description}</div>
                    <div className="tracking-wide">${this.props.price}<span className="text-gray-600 text-sm"> / week</span></div>
                    <div>{this.props.rating} Out of 5, </div>
                </div>
            </div>
        )
    }
}
