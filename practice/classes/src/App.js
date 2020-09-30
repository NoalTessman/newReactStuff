import React,{Component} from 'react';
import ClassComponent from "./classComponent"

class App extends React.Component{
  constructor(){
    super()
    this.state ={
      answer: "Yes"
    }
  }
  render(){
    return(
      <div>
        <ClassComponent />
      </div>
    )
  }
}

export default App;
