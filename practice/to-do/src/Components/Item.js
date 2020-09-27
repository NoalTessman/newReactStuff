import React from "react"

function Item(props){

    return(
        <div className="TodoItem">
            {console.log(props)}
        <input type="checkbox" />
        <p>{props.todo}</p>
        </div>
    )
}

export default Item