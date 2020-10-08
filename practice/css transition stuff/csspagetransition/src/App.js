import React from 'react';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom"
import About from "./About"
import HomePage from "./home"

import { TransitionGroup, CSSTransition} from "react-transition-group"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = "/" exact component={HomePage}/>
          <Route path = "/About" exact component={About}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
