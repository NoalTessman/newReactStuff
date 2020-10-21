import React, { Component } from 'react'
import NavBar from "../NavBar"
import Footer from "../Footer"
export default class About extends Component {
    render() {
        return (
            <div>
            <NavBar />
                <div className="AboutContainer">
                    <div className="AboutProfile"></div>
                    <div className="AboutDescription">
                        <p class="AboutDescriptionTitle">About</p>
                        <p class="AboutDescriptionBody"> 
                            <p>Hi, I'm Noal.</p> 
                            I've been around the technology sphere enough
                            to know many different facets of what makes 
                            a person mutually benificial, exciting, and happy to work with. I have many 
                            years of experience in the world of IT and 
                            many years of coding using many different 
                            tools to make that easier. 
                            <p>
                            I used to think my entire goal was to be "the best"
                            developer, but with my experience I know 
                            the best way forward is to make your website 
                            and how it performs something you don't 
                            have to worry about.
                            </p> 
                        </p>
                    </div>
                    <div className="AboutWhatIDoContainer">
                        <div className="AboutWhatIDoTitle">
                           <p>What I Use</p>
                        </div>
                        <div className="AboutWhatIDoItemList">
                        <p>Languages</p>
                            <li>Python</li>
                            <li>Ruby</li>
                            <li>Javascript</li>
                            <li>React.js</li>
                            <li>Express.js</li>
                            <li>MongoDB</li>
                            <li>MariaDB</li>
                            <li>Redux</li>
                            <li>React.Router</li>
                            <li>HTML</li>
                            <li>Powershell</li>
                            <li>Node.JS</li>
                        </div>
                        <div className="AboutWhatIDoItemList">
                        <p>Programs</p>
                            <li>Adobe Photoshop</li>
                            <li>Adobe Illustrator</li>
                            <li>Adobe XD</li>
                            <li>Adobe Premiere</li>
                            <li>Linux (Mint, Ubuntu, 
                                Lubuntu, xfce, Parrot)</li>
                            <li>MacOS</li>
                            <li>Windows (xp/7/8/10)</li>
                            <li>Active Directory</li>
                            <li>Office 365</li>
                        </div>
                        <div className="AboutWhatIDoItemList">
                        <p>Tools</p>
                            <li>PIL</li>
                            <li>CSS</li>
                            <li>CSS3</li>
                            <li>Flexbox</li>
                            <li>CSS Grid</li>
                            <li>Plot.ly</li>
                        </div>
                        <div className="AboutWhatIDoItemList" id="AboutWhatIDoItemListLearning">
                        <p>Learning</p>
                            <ul>
                            <li>TypeScript</li>
                            <li>Django</li>
                            <li>After Affects</li>
                            <li>Data Science</li>
                            <li>Docker </li>
                            </ul>
                        </div>
                    </div>
                <Footer />
                </div>
            </div>
        )
    }
}
