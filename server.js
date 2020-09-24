const http = require("http");
const express = require('express');
const app = express();
const server = require('http').Server(app);

const port = process.env.PORT || 3007;
server.listen(port, () => console.log(`Listening on port ${port}...`));