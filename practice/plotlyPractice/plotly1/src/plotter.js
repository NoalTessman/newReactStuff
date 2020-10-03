import React from "react"
import '../node_modules/react-vis/dist/style.css';
import {XYPlot,HorizontalGridLines, VerticalGridLines, XAxis, YAxis, HorizontalBarSeries} from 'react-vis';
import randNumber from "./randNumber"

class Plotter extends React.Component {
   constructor(){ 
    super()
    this.state ={
        test:6,
        randNumber:Math.floor(Math.random()* 10)
    }
    }
    render(){
        const data = [
            {x: 1, y: 8},
          ];

        console.log(data)

    return(
        <XYPlot height={300} width= {300}>

    <HorizontalBarSeries data={data.props} />
    <VerticalGridLines />
    <HorizontalGridLines />
    <XAxis />
    <YAxis />
    </XYPlot>   
    )
}}
export default Plotter