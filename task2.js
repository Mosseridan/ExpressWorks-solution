// STATIC
if(process.argc < 3)
    console.log("Usage: task2.js <PORT>, <INDEX.HTML>");

const express = require("express");
var app = express();
var path = require('path')
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
app.listen(process.argv[2]);
