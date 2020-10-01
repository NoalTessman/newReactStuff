import React from "react"
import image from "./78e826ca1b9351214dfdd5e47f7e2024.gif"
function ConditionalBill(props){
    if(props.isLoading ===true ){
        return (
            <div>
            <img className="billLoading"src={image}/>
            </div>
        ) 
    } else{
    return(

        <img className="billMurray" src="https://www.fillmurray.com/1800/1080"/>

    )
}}
export default ConditionalBill