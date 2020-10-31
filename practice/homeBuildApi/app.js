const express = require('express');
const mongoose = require('mongoose');
const app = express();


require('dotenv/config')
//Import Routes
const postsRoute = require('./routes/posts')

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/posts', postsRoute);
//Routes
app.get('/', (req, res)=>{
    res.send("we are home");
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true }, ()=> console.log('connected to DB!'))

app.listen(8080);