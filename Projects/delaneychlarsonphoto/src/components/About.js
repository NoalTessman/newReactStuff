import React, { Component } from 'react'
import SideBar from "./SideBar"
import AboutPhoto from "../PagePhotos/AboutPhoto.jpg"

export default class About extends Component {
    render() {
        return (
            <div className="PageContainer">
                <SideBar/>
                <div className="AboutContainer">
                        <img src={AboutPhoto} className="AboutPhoto"/>
                        <p className="AboutDescription">
                                <p id="AboutTitle">Who I Am</p>
                            My name is Delaney and I'm a realyl good photographer who is friendly and can take pictures really good.
                            I take pictures of things really good in a good way and in a way that make you money
                            I make you money for free wait no for money for me so I can buy things to make more money for me
                            Good picture taker I am.
                                <p id="other">
                                Fourty long years ago I willed myself into existence by killing the sultan of Saudi Arabia, he was easy to maim, the murder part I thought would be harder
                                but it really wasn't.
                                </p>
                            <p>
                                I kill First-borns by looking at them, don't tell anyone or they will take me away. I don't know what to do if I can't continuosly murder.
                            </p>
                        </p> 
                </div>
            </div>
        )
    }
}
