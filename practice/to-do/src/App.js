import React from "react"

function App(){
  return(
    <div className="TodoList">
       <div className="TodoHeader">
        <h1>To do list</h1>
        </div>
        <div className="TodoItem">
        <input type="checkbox" />
        <p>This is a to-do list item</p>
        </div>
        <div className="TodoItem">
        <input type="checkbox" />
        <p>This is a to-do list item</p>
        </div>
        <div className="TodoItem">
        <input type="checkbox" />
        <p>This is a to-do list item</p>
        </div>
        <div className="TodoItem">
        <input type="checkbox" />
        <p>This is a to-do list item</p>
        </div>
        <div className="TodoItem">
        <input type="checkbox" />
        <p>This is a to-do list item</p>
        </div>
    </div>
  )
}
export default App