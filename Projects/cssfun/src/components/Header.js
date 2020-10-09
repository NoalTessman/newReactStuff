import React, { Component } from 'react'
export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="Name">Noal Tessman</div>
                <div className="Links">
                    <div className="Links">Home</div>
                    <div className="Links">Resume</div>
                    <div className="Links">Projects</div>
                </div>
            </div>
        )
    }
}
