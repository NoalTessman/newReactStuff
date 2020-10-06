import React, {Component} from "react"
import Item from "./Components/Item"
import todoItems from "./Components/todoItems"
import render from "react-dom"
 
class App extends Component{
  constructor(){
    super()
    this.state={
      todos: todoItems,
      completed: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    this.setState(prevState =>{
      const updatedTodos = prevState.todos.map(item=> {  
        if (item.id === id){
            item.completed=!item.completed
          }
          return item
        })
        return {
          todos: updatedTodos
        }
    })
  }

  render(){
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const ItemLoader = this.state.todos.map(item=> <Item key={item.id} id={item.id} todo={item.todo} completed={item.completed} handleChange={this.handleChange}/>)
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
}
export default App