import React from "react"

function Item(props){

    return(
        <div className="TodoItem">
        <input type="checkbox" onChange={() => console.log("Real Test")}/>
        <p>{props.todo}</p>
        </div>
    )
}

export default Item