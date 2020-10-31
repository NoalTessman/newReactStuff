import React, { Component } from 'react'
import "./style.css"

export default class TailWindTesting extends Component {
    render(props) {
        return (
            <div className="bg-blue-700 ">
                {this.props.component}
                <button className="bg-blue-700 text-white font-bold py-4 px-4 cursor-pointer rounded hover:text-blue-900 bg-white rounded">Hello!</button>
                
            </div>
        )
    }
}
