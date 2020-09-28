import React from 'react'

function Joke(props){
    return(
        <div className="jokeBox"> 
            <div className ="joke">
            Joke: {props.body}
            </div>
            <div className = "punch">
            Punchline: {props.punchline}
            </div>        
        </div>
    )
}
export default Joke