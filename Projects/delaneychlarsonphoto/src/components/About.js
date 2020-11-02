import React, { Component } from 'react'
import SideBar from "./SideBar"
import AboutPhoto from "../PagePhotos/AboutPhoto.jpg"

export default class About extends Component {
    render() {
        return (
            <div className="PageContainer">
                <SideBar/>
                <div className="AboutContainer">
                    <div className="AboutPhoto">
                        <img src={AboutPhoto}/>
                    </div>
                        <p className="AboutDescription">
                                <p id="AboutTitle">Who I Am</p>
                                To me, photography is about memories. I like to capture a moment in time that you can look back on for years to come. 
                                <p id="other">
                                Whether it’s your bridal photos, family portraits, or graduation photos, my goal is to freeze that moment in time so you can relive those wonderful memories in five, ten, twenty years in the future. 
                                </p>
                            <p>
                            You can contact me <a href="./Contact"><span id="email">
                                here
                            </span> </a>for a complimentary consultation to discuss your future photoshoot.
                            </p>
                            <p id="SignOff">
                                -Delaney
                            </p>
                        </p> 
                </div>
            </div>
        )
    }
}
