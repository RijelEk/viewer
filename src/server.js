const webpack = require("webpack");
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require("webpack-hot-middleware");
const config = require("../webpack.config.js");

const http = require("http");
const express = require('express');
const app = express(),compiler = webpack(config)
const server = require('http').Server(app);
const path = require('path');
const templater = require("./utilities/router");

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }));

app.use(webpackHotMiddleware(compiler))
app.use(express.static(path.join(__dirname, 'public')))

app.get(["/:id", "/:id/:id", "*"], (req,res)=>{
    templater(req, res)
});

// /* Connect databse */
// require('./startup/db')();

const port = process.env.PORT || 8080;
server.listen(port, () => console.log(`Listening on port ${port}...`));