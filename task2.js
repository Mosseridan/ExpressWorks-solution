// STATIC
if(process.argc < 3)
    console.log("Usage: task2.js <PORT> <PATH>");

const express = require("express");
var app = express();
app.use(express.static(process.argv[3]));
app.listen(process.argv[2]);
