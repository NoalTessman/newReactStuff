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
                    <p>Contact me to set up a complimentary consultation for your photoshoot</p>
                </div>
                <div className ="ContactSocialMediaLinks">
                <div className ="ContactSocialMediaLink"><a href="https://www.linkedin.com/in/delaney-chlarson/" target="_blank"> <span>Linkedin</span></a></div>
                <div className ="ContactSocialMediaLink" ><a href="mailto:delaney.chlarson@email.com"><span>delaneychlarson@gmail.com</span></a></div>
                <div className ="ContactSocialMediaLink"><a href="https://www.facebook.com/delaney.chlarson" target="_blank"> <span>Facebook</span></a></div>
                <div className ="ContactSocialMediaLink"><a href="https://www.instagram.com/the.corpse.flower/?hl=en" target="_blank"> <span>Instagram</span></a></div>
                </div>
                <div className="ContactCalendar">
                </div>
                </div>
            </div>
        )
    }
}
