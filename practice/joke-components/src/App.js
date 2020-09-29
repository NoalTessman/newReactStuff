import React from "react"
import Joke from "./Joke"
import jokesData from "./jokesData"

function App(){
    const nums = [1,2,3,4,5,6,7,8,9]
    const doubled = nums.map(function(num){
        return num*2
    })
    const jokesComponents = jokesData.map(joke => <Joke key={joke.id} body={joke.body} punchline={joke.punchline} id={joke.id}/>)

return(
    <div className ="home">
        {jokesComponents}
    </div>
)
}
export default App