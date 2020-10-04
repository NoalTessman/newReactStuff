import React from 'react';
import LoggedIn from "./LoggedIn"

class App extends React.Component {
  constructor(){
    super()
    this.state={
      test:"hello"

    }
  }

  render(){
  return (
    <div className="App">
      <LoggedIn />
    </div>
    )
  }
}

export default App;
