import React, { Component } from 'react'
import TailWindTester from "./TailWindTester"
import PropertyCard from "./PropertyCard"
import NintendoMansion from"./house1.jpg"

export default class App extends Component {
  constructor(){
    super()
    this.state={
      currentComponent:""
    }
  }
  onClick = ()=>{

  }
  render(){
    return (
      <div className="Appcontainer">
        <div className="antialiased text-gray-900">
          <TailWindTester component="Grapher"/>
          <div id="CardContainer" className="antialiased text-blue-900 bg-blue-300" >
          <PropertyCard beds=".5"baths="0"price="500"picture={NintendoMansion} description="Very cozy house with comfy low profile bed" title="The Nintendo Mansion"/>
          <PropertyCard beds="1"baths="2"price="500"picture={NintendoMansion} description="Very cozy house with comfy low profile bed" title="The Nintendo Mansion"/>
          <PropertyCard beds="1"baths="2"price="500"picture={NintendoMansion} description="Very cozy house with comfy low profile bed" title="The Nintendo Mansion"/>
          </div>
        </div>
      </div>
    )
  }
}
