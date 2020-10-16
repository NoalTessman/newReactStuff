const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());


const PORT = process.env.PORT | 5000;
app.listen(PORT, () =>{
    console.log(`server listening on port ${PORT}`)
    console.log("hello")
})