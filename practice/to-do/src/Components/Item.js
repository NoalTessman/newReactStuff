import React from "react"

function Item(props){
    const completedStyle = {
        fontStyle:"italic",
        backgroundColor:"rgba(216, 191, 216)"
    }

    return(
        <div className="TodoItem">
        <input className="TodoItemButton" type="checkbox" 
        checked = {props.completed}
        onChange={() =>props.handleChange(props.id)}/>
        <div className="TodoItemText" style={props.completed ? completedStyle:null}>{props.todo}</div>
        </div>
    )
}

export default Item