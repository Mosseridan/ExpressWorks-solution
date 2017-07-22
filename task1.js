// HELLO WORLD!
if(process.argc < 3)
    console.log("Usage: task1.js <PORT>");

const express = require("express");
var app = express();
app.get('/home', (req, res) => res.end("Hello World!"));
app.listen(process.argv[2]);
