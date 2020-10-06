import React from "react"
class MemeGenerator extends React.Component{
constructor(){
    super()
    this.state = {
        topText:"",
        bottomText:"",
        randImg:"http://i.imgflip.com/1bij.jpg",
        AllMemeImgs:[]
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

}
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            this.setState({AllMemeImgs:response.data})
        })
    }
    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]:value
        })
    }
    handleSubmit(event){
        event.preventDefault()
        const randNum = Math.floor(Math.random()*this.state.AllMemeImgs.memes.length)
        const randMemeImg = this.state.AllMemeImgs.memes[randNum].url
        this.setState({randImg:randMemeImg})
        console.log(randNum)
        //const randMemeImg = this.state.AllMemeImgs[randNum].url
        //this.setState({randImg: randMemeImg})
    }
render(){
    
    return(
    <div> 
        <form className="meme-form" onSubmit={this.handleSubmit}>
            <input 
                value="First Name" 
                name="topText"
                type="text"
                value={this.state.topText}
                onChange={this.handleChange}
            />
            <input 
                value="First Name" 
                name="bottomText"
                type="text"
                value={this.state.bottomText}
                onChange={this.handleChange}
            />
            <button>Gen</button>
        </form>
        <div className="meme">
            <img src={this.state.randImg} alt=""/>
            <h2 className ="top">{this.state.topText}</h2>
            <h2 className ="bottom">{this.state.bottomText}</h2>

        </div>
    </div>
)}
}
export default MemeGenerator