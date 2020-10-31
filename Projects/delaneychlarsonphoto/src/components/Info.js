import React, { Component } from 'react'
import SideBar from "./SideBar"
import "../tailwind.css"

export default class Info extends Component {
    render() {
        return (
            <div className="PageContainer">
                <SideBar/>
                <div className="InfoContainer">
                    <div className="PriceCard">
                    <h2>Family Portraits</h2>
                    <li>45-60 min. session at the location of your choice</li>
                    <li>Complimentary consultation to hone your personal style</li>
                    <li>15-20 meticulously edited digital images</li>
                    <li>Print release</li>
                    <li>Prices starting at $200</li>
                    </div>  
                    <div className="PriceCard2">
                    <h2>Couples</h2> <li>*perfect for engagements, bridals, maternity, etc.</li>
                    <li>45-60min session at the location of your choice</li>
                    <li>Complimentary consultation to hone your personal style</li>
                    <li>10-15 meticulously edited digital images</li>
                    <li>Print release</li>
                    <li>Prices starting at $150</li>
                    </div>
                    <div className="PriceCard">
                    <h2>Portraits</h2>
                    <li>*perfect for senior portraits, mission, bridals, etc.</li> 
                    <li>30-45min session at the location of your choice</li>
                    <li>Complimentary consultation to hone your personal style</li>
                    <li>5-10 meticulously edited digital images</li>
                    <li>Print release</li>
                    <li>Prices starting at $100</li>
                    </div>
                    <div className="PriceCard2">  
                    <h2>Newborn/Babies</h2>
                    <li>30-45min session at the location of your choice</li>
                    <li>Complimentary consultation to hone your personal style</li>
                    <li>5-10 meticulously edited digital images</li>
                    <li>Print release</li>
                    <li>Prices starting at $100</li>
                    </div>
                    <div className="PriceCard">
                    <h2>Headshots</h2> <li>*perfect for companies, linkedin, actors, etc.</li>
                    <li>30-45min session at the location of your choice</li>
                    <li>Complimentary consultation to hone your personal style</li>
                    <li>1-5 meticulously edited digital images</li>
                    <li>Print release</li>
                    <li>Prices starting at $75</li>
                    </div>


                </div>
            </div>
        )
    }
}
