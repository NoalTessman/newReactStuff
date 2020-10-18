import React, { Component } from 'react'
import gmail1 from "./icons/gmail1.png"
import instagram2 from "./icons/instagram2.png"
import instagram1 from "./icons/instagram1.png"
import linkedin1 from "./icons/linkedin1.png"
import linkedin2 from "./icons/linkedin2.png"
import github1 from "./icons/github1.png"
export default class Footer extends Component {
    render() {
        return (
            <div className="FooterContainer">
                <div className="Copyright">Noal Tessman@2020</div>
                <div className="FooterSocialMediaLinks">
                    <div className="FooterSocialMediaLink"><img src={gmail1}/></div>
                    <div className="FooterSocialMediaLink"><img src={instagram1}/></div>
                    <div className="FooterSocialMediaLink"><img src={linkedin2}/></div>
                    <div className="FooterSocialMediaLink"><img src={github1}/></div>
                </div>
            </div>
        )
    }
}
