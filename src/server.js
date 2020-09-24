const webpack = require("webpack");
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require("webpack-hot-middleware");
const config = require("../webpack.config.js");

const http = require("http");
const express = require('express');
const app = express(),compiler = webpack(config)
const server = require('http').Server(app);
const path = require('path');

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }));

app.use(webpackHotMiddleware(compiler))

app.use(express.static(path.join(__dirname, 'public')))


const NAMESPACES = [
    {
        id:"xuver",
        name:"xuver",
        template:"Template_1"
    },
    {
        id:"summerwood",
        name:"Summerwood",
        template:"Template_2"
    },
    {
        id:"randomcompany",
        name:"Random Inc.",
        template:"Template_1"
    }
];

const LAYOUTS = [
    {name:"Template_1", url:"/template__1.html"},
    {name:"Template_2", url:"/template__2.html"},
];

app.get("*",  (req,res)=>{
    if (!req.originalUrl.includes('favicon.ico')) {
        let LAYOUT = null;
        const URL = req.originalUrl;
        const URL__ARR = URL.split("/");
        const USER = URL__ARR[1];

        if(typeof USER !== "undefined" && USER != ""){
            const CURRENT__NAMESPACE = NAMESPACES.find((el) => el.id === USER);
            if(CURRENT__NAMESPACE && CURRENT__NAMESPACE.template){
                LAYOUT = LAYOUTS.find((el) => el.name === CURRENT__NAMESPACE.template).url;
            } else {
                LAYOUT = LAYOUTS.find((el) => el.name === "Template_1").url;
            }
        } else {
            LAYOUT = LAYOUTS.find((el) => el.name === "Template_1").url;
        }


        res.sendFile(path.join(__dirname + LAYOUT));
    }
});

// /* Connect databse */
require('./startup/db')();

const port = process.env.PORT || 8080;
server.listen(port, () => console.log(`Listening on port ${port}...`));