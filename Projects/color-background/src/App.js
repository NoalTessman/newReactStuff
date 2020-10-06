import React from "react"
import Square from "./Components/SquareComponent"
import  v4  from "uuid";
class App extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        const createBoxes = count => {
            return(<div className="squareBox">{Array(count).fill(1).map((input,i)=>(
                    <Square index={i} key={v4()}/>))}
                   </div>)
          }
    return(
        <div>
                {createBoxes(100)}
        <header>
            Hello
        </header>
        </div>
    )}
            }
export default App