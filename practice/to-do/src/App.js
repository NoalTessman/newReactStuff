import React from "react"
import Item from "./Components/Item"
import todoItems from "./Components/todoItems"
const firstName = "Bob"
const lastName = "Dole"

function App(){
  let numberOfItems= 6
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()

  const ItemLoader = todoItems.map(item=> <Item key={item.key} todo={item.todo}/>)
  return(
    <div className="TodoList">
       <div className="TodoHeader">
        <h1>To do list</h1>
        </div>
        {ItemLoader}
        
        <div className="TodoFooter">It is currently 0{hours}:{minutes} </div>
    </div>
  )
}
export default App