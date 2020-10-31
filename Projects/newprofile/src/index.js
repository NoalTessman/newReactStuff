import React from 'react';
import ReactDOM from 'react-dom';
//import Retroprofile from './RetroProfile';
import "./index.css"
// import ReactDom from "react-dom"
import {BrowserRouter} from "react-router-dom"
import App from "./App"
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
}

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options}>
  <BrowserRouter>
    <App/>
    </BrowserRouter>
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
);