const members = require('./members');
const express = require("express");
const logger = require('./middleware/logger');
const app = express();


//Middleware
app.use(logger);

//Get Single Member
app.get('/api/members/:id', (req,res) => {
    const found = members.some(member => member.id === parseInt(req.params.id) )
    
    found ? res.json(members.filter(member => member.id === parseInt(req.params.id))):res.status(400).json({msg: `No Member of ID ${req.id} `});
    res.json(members.filter(member => member.id === parseInt(req.params.id)));

})
 //Gets all members
 app.get('/api/members', (req,res) =>{res.json(members);} )

const PORT = process.env.PORT | 5000;

app.listen(PORT), () => console.log(`Server started on port ${PORT}:`)