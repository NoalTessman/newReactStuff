import React, { Component } from "react"
import ReactDom from "react-dom"
class App  extends Component{
  constructor(){
      super()
      this.state = {
        test:"Hello",
        bgColor:"Black",
        counter:0,
        billSize:0
      }
      this.handleClick = this.handleClick.bind(this)
      this.handleBill = this.handleBill.bind(this)
  }
  
  handleClick(){
    this.setState((prevState)=>{
      return{
        counter: prevState.counter+1
      }})
  }
  handleBill(){
    this.setState((prevState)=>{
      return{
        billSize: prevState.billSize+10
      }
    })
  }


  render(){
    return(
      <div className="box">
        {this.state.test}
        <img src="https://www.fillmurray.com/200/100" onMouseOver={() => this.state.bgColor="blue"}/>
        <br />
        <br />
  
        <div className="Number">{this.state.counter}</div>
        <button onClick={this.handleClick}>Click me</button>
        
        <div className="Number">{this.state.billSize}</div>
        <button onClick={this.handleBill}>Click me</button>
        

      </div>
    
    )
  }
} 

export default App