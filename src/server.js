
const webpack = require("webpack");
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require("webpack-hot-middleware");
const config = require("../webpack.config.js");

const http = require("http");
const express = require('express');
const app = express(),compiler = webpack(config)
const server = require('http').Server(app);
const path = require('path');
const ejs = require('ejs');
const expressLayouts = require("express-ejs-layouts");

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }));

app.use(webpackHotMiddleware(compiler))

app.use(express.static("public"));
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views','./src/views');

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
    {name:"Template_1", url:"./templates/template_1.ejs"},
    {name:"Template_2", url:"./templates/template_2.ejs"},
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

        console.log(LAYOUT)
        res.render('index', {layout:LAYOUT});
    }
});

// /* Connect databse */
require('./startup/db')();

const port = process.env.PORT || 8080;
server.listen(port, () => console.log(`Listening on port ${port}...`));