import React from "react"

function Item(props){

    return(
        <div className="TodoItem">
        <input type="checkbox" checked={props.completed}/>
        <p>{props.todo}</p>
        </div>
    )
}

export default Item