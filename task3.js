// JADE
if(process.argc < 4)
    console.log("Usage: task3.js <PORT> <PATH>");

const express = require("express");
var app = express();
app.set('views', process.argv[3]);
app.set("view engine", "jade");
app.get('/home', (req, res) =>
    res.render('index', {date: new Date().toDateString()}));
app.listen(process.argv[2]);
