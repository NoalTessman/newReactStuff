import React, { Component } from 'react'
import SideBar from "./SideBar"
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import testImage from "../PagePhotos/Circus.jpg";
import Image1 from "../BusinessPhotos/1.jpg";
import Image2 from "../BusinessPhotos/2.jpg";
import Image3 from "../BusinessPhotos/3.jpg";
import Image4 from "../BusinessPhotos/4.jpg";
import Image5 from "../BusinessPhotos/5.jpg";


export default class Portrait extends Component {
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
