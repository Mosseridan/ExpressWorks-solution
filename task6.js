// PARAM PAM PAM
if(process.argc < 3)
    console.log("Usage: task6.js <PORT>");

const crypto = require('crypto');
const express = require("express");
var app = express();

app.put('/message/:id', (req, res) => 
    res.send(crypto.createHash('sha1')
        .update(new Date().toDateString() + req.params.id)
        .digest('hex')));
app.listen(process.argv[2]);