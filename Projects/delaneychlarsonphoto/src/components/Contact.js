import React, { Component } from 'react'
import SideBar from "./SideBar"

export default class contact extends Component {
    render() {
        
        return (
            <div className="PageContainer">
                <SideBar/>
                <div className="ContactContainer">
                <div className="ContactTitle">
                    Contact
                </div>
                <div className="ContactBio">
                    <p>If you would like to work with me, I would love to get in contact with you.</p>
                </div>
                <div className ="ContactSocialMediaLinks">
                <div className ="ContactSocialMediaLink"><a href="https://www.linkedin.com/in/delaney-chlarson/" target="_blank"> Linkedin</a></div>
                <div className ="ContactSocialMediaLink" >delaneychlarson@gmail.com</div>
                <div className ="ContactSocialMediaLink"><a href="https://www.facebook.com/delaney.chlarson" target="_blank"> facebook</a></div>
                </div>
                <div className="ContactCalendar">
                </div>
                </div>
            </div>
        )
    }
}
