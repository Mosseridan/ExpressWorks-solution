// STYLISH CSS
if(process.argc < 4)
    console.log("Usage: task5.js <PORT> <PATH>");

const express = require("express");
var app = express();
var stylus = require('stylus');

app.use(stylus.middleware(process.argv[3]));
app.use(express.static(process.argv[3]));
app.listen(process.argv[2]);
