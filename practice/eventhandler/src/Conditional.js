import React from "react"
import image from "./78e826ca1b9351214dfdd5e47f7e2024.gif"
function Conditional(props){
    if(props.isLoading ===true ){
        return (
            <div>
            <img class="photo"src={image}/>
            </div>
        ) 
    } else{
    return(
        <h1 id="Header">This is a thing with bill Murray at the top and buttons which increase in size and change the bg-color and text color of a box</h1>
    )
}}
export default Conditional