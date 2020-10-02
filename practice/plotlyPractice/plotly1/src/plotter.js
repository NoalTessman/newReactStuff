import React from "react"
import '../node_modules/react-vis/dist/style.css';
import {XYPlot,HorizontalGridLines, VerticalGridLines, XAxis, YAxis, HorizontalBarSeries} from 'react-vis';

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
            {x: this.state.randNumber, y: 8},
            {x: this.state.randNumber, y: 5},
            {x: this.state.randNumber, y: 4},
            {x: this.state.randNumber, y: 9},
            {x: this.state.randNumber, y: 1},
            {x: this.state.randNumber, y: 7},
            {x: this.state.randNumber, y: 6},
            {x: this.state.randNumber, y: 3},
            {x: this.state.randNumber, y: 2},
            {x: this.state.randNumber, y: 0}
          ];
        console.log(data)

    return(
        <XYPlot height={300} width= {300}>

    <HorizontalBarSeries data={data} />
    <VerticalGridLines />
     <HorizontalGridLines />
    <XAxis />
    <YAxis />
    </XYPlot>   
    )
}}
export default Plotter