import React from 'react';

class App extends React.Component{
  constructor(){
  super()
    this.state={
      isLoading:false,
      characters:{}
    }
}

componentDidMount(){
  this.setState({
    isLoading:true
  })
  fetch("https://swapi.dev/api/people/1")
    .then(response => response.json())
    .then(data => this.setState({
      characters : data,
      isLoading: false
    }))
}

  render(){
    const text = "Loading..."
  return (
    <div className="characterCard">
      {this.state.isLoading === true?"Loading...":this.state.characters.name}
      {this.state.isLoading === true?"Loading":this.state.characters.films}
    </div>
  );
}}

export default App
