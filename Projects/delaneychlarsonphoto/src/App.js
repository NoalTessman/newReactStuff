import React from 'react';
import HomePage from "./homePage"
import {Switch, Route} from "react-router"
import {BrowserRouter} from "react-router-dom"
import Info from './components/Info'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import About from './components/About';
import Portrait from "./components/Portrait"
import Family from "./components/Family"
import Business from "./components/Business"


function App() {
  return (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/Info" component={Info}/>
        <Route path="/About" component={About}/>
        <Route path="/Contact" component={Contact}/>
        <Route exact path="/Portfolio" component={Portfolio}/>
        <Route path="/Portfolio/Portrait" component={Portrait}/>
        <Route path="/Portfolio/Family" component={Family}/>
        <Route path="/Portfolio/Business" component={Business}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
