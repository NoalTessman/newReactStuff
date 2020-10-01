import React, { Component } from "react"
import ReactDom from "react-dom"
import randomcolor from "randomcolor"
import Conditional from "./Conditional"
import ConditionalBill from "./conditionalBill"

class App  extends Component{
  constructor(){
      super()
      this.state = {
        test:"Hello",
        bgColor:"Black",
        counter:15,
        countertext:"rem",
        billSize:0,
        newColor:"",
        isLoading:true
      }
      this.handleClick = this.handleClick.bind(this)
      this.handleBill = this.handleBill.bind(this)
      this.handleDecrease = this.handleDecrease.bind(this)

  }
  
  handleClick(){
    this.setState((prevState)=>{
      return{
        counter: prevState.counter+1
      }})
  }
  handleDecrease(){
    this.setState((prevState)=>{
      return{
        counter: prevState.counter-1
      }})
  }
  handleBill(){
    this.setState((prevState)=>{
      return{
        billSize: prevState.billSize+10
      }
    })
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.counter!== this.state.counter){
    const randColor = randomcolor()
    this.setState({newColor:randColor})
  }}

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        isLoading:false
      })
    },1500)
  }


  render(){
    this.state.countertext = this.state.counter+"rem";
    return(
      <div className="box">
        <Conditional isLoading={this.state.isLoading}/>
        <br />
        <br />
        <div className="Numbers"> 
        <div className="Number" style={{color:this.state.newColor,backgroundColor:randomcolor(),fontSize:this.state.countertext}}>{this.state.counter} </div>
        <div className="Number" style={{color:this.state.newColor,backgroundColor:randomcolor(),fontSize:this.state.countertext}}>{this.state.counter}</div>
        </div>
        <div className="buttons">
        
        <button className="button" onClick={this.handleClick}>Increase</button>
        <button className="button" onClick={this.handleDecrease}>Decrease</button>
        </div>
        <ConditionalBill isLoading={this.state.isLoading}/>
      </div>
    
    )
  }
} 

export default App