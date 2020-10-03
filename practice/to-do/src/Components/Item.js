import React from "react"

function Item(props){

    return(
        <div className="TodoItem">
        <input className="TodoItemButton" type="checkbox" 
        checked = {props.completed}
        onChange={() =>props.handleChange(props.id)}/>
        <div className="TodoItemText">{props.todo}</div>
        </div>
    )
}

export default Item