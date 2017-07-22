// JSON ME
if(process.argc < 4)
    console.log("Usage: task8.js <PORT> <PATH>");
    
const fs = require('fs');
const express = require("express");
var app = express();

app.get('/books', (req, res) => 
    fs.readFile(process.argv[3], 'utf8', (err, data) => {
        if (err) return res.send(500);
        res.json(JSON.parse(data));
    }));
app.listen(process.argv[2]);