// GOOD OLD FORM
if(process.argc < 3)
    console.log("Usage: task4.js <PORT>");
    
const bodyparser = require('body-parser');
const express = require("express");
var app = express();

app.use(bodyparser.urlencoded({extended: false}));
app.post('/form', (req, res) => 
    res.end(req.body.str.split('').reverse().join('')));
app.listen(process.argv[2]);
