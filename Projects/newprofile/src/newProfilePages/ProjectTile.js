import React, { Component } from 'react';

export default class ProjectTile extends Component {

    render() {

        return (
            <div className="ProjectTile" id={this.props.id}>
                <span>{this.props.title}</span>
            </div>
        )
    }
}
