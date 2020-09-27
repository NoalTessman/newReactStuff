import React from "react"
import Item from "./Components/Item"
const firstName = "Bob"
const lastName = "Dole"

function App(){
  let numberOfItems= 6
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  return(
    <div className="TodoList">
       <div className="TodoHeader">
        <h1>To do list</h1>
        </div>
        <Item 
            todo="Bake Cake"/>
        <Item 
            todo="Throw rocks"/>
        <Item 
            todo="Fight Children"/>
        <Item 
            todo="Undo"/>
        <Item 
            todo="Serve Time"/>
        <Item 
            todo="Dream of Freedom"/>
        
        <div className="TodoFooter">It is currently 0{hours}:{minutes} </div>
    </div>
  )
}
export default App