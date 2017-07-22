// WHAT'S IN QUERY
if(process.argc < 3)
    console.log("Usage: task7.js <PORT>");

const express = require("express");
var app = express();
app.get('/search', (req, res) => res.send(req.query));
app.listen(process.argv[2]);