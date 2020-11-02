import React, { Component } from 'react'
import SideBar from "./SideBar"
import PriceCard from "./PriceCard"


//Images
import portraits from "../PortraitPhotos/10.jpg"
import family from "../FamilyPhotos/6.jpg"
import couples from "../PortraitPhotos/9.jpg"
import bridals from "../PortraitPhotos/8.jpg"
import business from "../BusinessPhotos/6.jpg"
import "../tailwind.css"

export default class Info extends Component {
    render() {
        return (
            <div className="PageContainer">
                <SideBar/>
                <div className="InfoContainer">
                    <PriceCard title="Family Portraits" 
                    second="45-60 min. session at the location of your choice"
                    third="15-20 meticulously edited digital images"
                    price="Prices starting at $200"
                    img={family}/>
                    <PriceCard title="Couples" 
                    asterik="*perfect for engagements, bridals, maternity, etc."
                    second="45-60min session at the location of your choice"
                    third="15-20 meticulously edited digital images"
                    price="Prices starting at $200"
                    img={couples}/>
                    <PriceCard 
                    title="Bridals"
                    asterik="*perfect for senior portraits, mission, bridals, etc."
                    second="45-60min session at the location of your choice"
                    third="5-10 meticulously edited digital images"
                    price="Prices starting at $100"
                    img={bridals}/>
                    <PriceCard title="Portraits" 
                    asterik="*perfect for senior portraits, mission, etc."
                    second="45-60min session at the location of your choice"
                    third="15-20 meticulously edited digital images"
                    price="Prices starting at $100"
                    img={portraits}/>
                    <PriceCard 
                    title="Headshots"
                    asterik="*perfect for companies, linkedin, actors, etc."
                    second="30-45min session at the location of your choice"
                    third="1-5 meticulously edited digital images"
                    price="Prices starting at $75"
                    img={business}
                    />
                </div>
            </div>
        )
    }
}
