const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require("fs");
const path = require('path');
const webpack = require('webpack')

/* (!) To run in docker localy uncomment host  */

const entryPath  = './public/js/index.ts';

let htmlPageNames = ["template__1", 'template__2']; //tempaltes
let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `./src/public/${name}.html`, 
    filename: `${name}.html`,
    chunks: [`main`], 
    inject:true
  })
});



module.exports = {
    entry: ['babel-polyfill', entryPath],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devtool: "source-map",
    mode: "development",
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      // host: "0.0.0.0",
      allowedHosts: ["viewer.xu.local"],
      public: "viewer.xu.local",
      port: 443,
      https: {
        key: fs.readFileSync("https/key"),
        cert: fs.readFileSync("https/crt")
      },
      historyApiFallback: true,
      watchOptions: {
        ignored: /node_modules/
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: `./src/public/template__1.html`, 
        filename: `template__1.html`,
        chunks: [`main`], 
        inject:true
      }),
      new webpack.HotModuleReplacementPlugin(),
    ].concat(multipleHtmlPlugins),
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', "scss"],
        alias: {
          "@": path.resolve(__dirname, "public/") // for IDE only, the main alias is in .babelrc
        }
    },
    module: {
        rules: [
  { test: /\.ejs$/, loader: "ejs-render-loader" }, 
          {
            test: /\.(html)$/,
            use: ['html-loader']
         },
          {
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: [
              {
                loader: "ts-loader"
              }
            ]
          },
                {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                  {
                    loader: "babel-loader",
                    options: {
                      cacheDirectory: ".cache/babel"
                    }
                  }
                ]
              },
              {
                test: /\.scss$/,
                use: [
                  {
                    loader: "style-loader",
                    
                  },
                  {
                    loader: "css-loader",
                    
                  },
                  {
                    loader: "sass-loader",
                    
                  }
                ]
              },
              {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader"
              },
              {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                loader: "file-loader"
              },
              {
                test: /\.(jpg|jpeg|png|gif|pdf|ico|mp4|obj)$/,
                loader: "file-loader",
                options: {
                  outputPath: "img/",
                  name: "[name][hash].[ext]"
                }
              }
        ],
       
    },

};
