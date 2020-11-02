import React, { Component } from 'react'
import "../tailwind.css"

//Images
export default class PriceCard extends Component {
    render() {
        return (
            <div className="PriceCard">
                <div className="flex flex-col justify-center items-center w-2/3">
                    <h2 className="text-6xl font-bold pt-10 tracking-wider font-light">{this.props.title}</h2>
                        <p className="text-gray-700 italic">{this.props.asterik}</p>
                        <div className="text-2xl text-gray-500">
                        <li>{this.props.second}</li>
                        <li>{this.props.third}</li>
                        <li>Complimentary consultation to hone your personal style</li>
                        <li>Print release</li>
                        </div>
                        <p className="text-gray-500 italic">{this.props.price}</p>
                </div>
                <div className="justify-center flex h-full p-5 w-1/2">
                    <img className="object-scale-down" src={this.props.img} alt={this.props.title}/>
                </div>
            </div>
        )
    }
}
