const http = require("http");
const express = require('express');
const app = express();
const server = require('http').Server(app);
var path = require('path');

app.get("/", (_,res)=>{
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

// /* Connect databse */
require('./startup/db')();

const port = process.env.PORT || 3007;
server.listen(port, () => console.log(`Listening on port ${port}...`));