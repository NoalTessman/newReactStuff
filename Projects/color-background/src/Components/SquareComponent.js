import React from "react"


function Square(props){
    function randBit(){
        const Num = Math.floor(Math.random()*(0,255))
        return Num
    }
    function randAni(){
        const Num = Math.random()*(.05,4)
        return Num
    }
    const BgColor = `rgb(${randBit()}, ${randBit()}, ${randBit()})`

    return(
        <div id="square" style={{animationDuration:`${randAni}s`
        //, backgroundColor:BgColor
        , animationIterationCount: "infinite"
        }}>
            <button onClick={console.log(console.log(props))}>Test</button>
        
        </div>
    )
}

export default Square
