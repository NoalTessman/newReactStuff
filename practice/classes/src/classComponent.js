import React, { Component } from "react"

class ClassComponent extends React.Component{
constructor(){
    super()
    this.state ={
        me:"slayerOfYams",
        isLoggedIn:true
    }}
    render(){
        let wordDisplay
        if (this.state.isLoggedIn){
            return(
                <div>
                you are logged in as {this.state.me}
                </div>
            )
        }
        return(
            <div>
                {this.state.me}, you are not logged in
            </div>
        )
    }
}

export default ClassComponent;