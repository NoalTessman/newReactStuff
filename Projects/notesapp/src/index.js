import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require("firebase")
require('firebase/firestore');

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC_CwdGu59o8nKg6pmoEjs9KeUwCtmjsVE",
    authDomain: "notes-app-72df6.firebaseapp.com",
    databaseURL: "https://notes-app-72df6.firebaseio.com",
    projectId: "notes-app-72df6",
    storageBucket: "notes-app-72df6.appspot.com",
    messagingSenderId: "1027499861754",
    appId: "1:1027499861754:web:865462444dd3779d8b0b43",
    measurementId: "G-J35LEV3EML"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('notes-app-container')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
