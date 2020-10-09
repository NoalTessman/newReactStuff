import React, { Component } from 'react'
import profilePic from "../pics/profilepic.png" 
export default class HomePage1 extends Component {
    render(props) {
        return (
            <div class ="homePage1">
                <img id="profile" src={profilePic}/>
                <p>hello</p>
            </div>
        )
    }
}
