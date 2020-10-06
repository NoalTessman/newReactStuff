import React from "react"
import randomColor from "randomcolor"

class Square extends React.Component{
    constructor(){
        super()
        this.state={
            newColor:"white",
            transitionNew: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount(){
        this.setState({newColor:"white"})
    }
    handleChange(){
        this.setState({newColor:randomColor({hue: 'green'})})
    }
    render(props){
    function randAni(){
        const Num = Math.random()*(.05,4)
        return Num
    }
    return(
        <div className="square" style={{backgroundColor:this.state.newColor, 
        transition:`1s`}
        } onKeyDown={this.handleChange} 
        onPointerOver={this.handleChange}
        onTransitionEnd={this.handleChange}
        onScroll={this.handleChange}
        >{this.state.newColor}
        </div>
    )}
}

export default Square
