import React from "react"
import Square from "./Components/SquareComponent"
import  v4  from "uuid";
let count = 0
function App(){
const Squares =
    [...Array(16)].map(item =>
        item.append(count),
        <Square key={item.count} div={item.div}/>,
        console.log("test")
      )
return(
<div className="squareBox">
    {Squares}
</div>
)}
export default App