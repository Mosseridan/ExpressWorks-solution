// STYLISH CSS
if(process.argc < 4)
    console.log("Usage: task5.js <PORT> <PATH>");

const stylus = require('stylus');
const express = require("express");
var app = express();

app.use(stylus.middleware(process.argv[3]));
app.use(express.static(process.argv[3]));
app.listen(process.argv[2]);
