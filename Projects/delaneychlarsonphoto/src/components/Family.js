import React, { Component } from 'react'
import SideBar from "./SideBar"
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Image1 from "../FamilyPhotos/1.jpg";
import Image2 from "../FamilyPhotos/2.jpg";
import Image3 from "../FamilyPhotos/3.jpg";
import Image4 from "../FamilyPhotos/4.jpg";
import Image5 from "../FamilyPhotos/5.jpg";


export default class Family extends Component {
    render() {
        return (
            <div className="PageContainer">
               <SideBar /> 
                <div className="ImageContainer">
                    <Carousel>
                        <div className="ImageImage"> <img src={Image1}/></div>
                        <div className="ImageImage"><img src={Image2}/></div>
                        <div className="ImageImage"><img src={Image3}/></div>
                        <div className="ImageImage"><img src={Image4}/></div>
                        <div className="ImageImage"><img src={Image5}/></div>
                    </Carousel>
                </div>
            </div>
        )
    }
}
