import React, { Component } from 'react'
import NavBar from "../NavBar"
import Footer from "../Footer"
import ProjectTile from "./ProjectTile"

export default class Projects extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="ProjectHome">
                   <div className="ProjectTileHolder">
                        <ProjectTile title="Dog Finder" id="DogFinder"/> 
                        <ProjectTile title="Slit-Scan Timelapses" id="slitScan"/> 
                        <ProjectTile title="Old Portfolio" id="OldProfile"/>  
                        <ProjectTile title="PoemFinder" id="PoemFinder"/> 
                        <ProjectTile title="Dog Hotel" id="DogHotel"/> 
                        <ProjectTile title="Genetic Algorithm" id="GeneticAlgorithm"/> 
                    </div> 
                </div>
                <Footer />
            </div>
        )
    }
}
