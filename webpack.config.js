// const WebpackPwaManifest = require('webpack-pwa-manifest'); //don't need this plugin
const path = require('path');


//config for webpack with babel
const config = {
    entry: {
      app: './public/index.js', //using public dir instead of src dir
    },
    output: {
      path: __dirname + '/dist',
      filename: '[name].bundle.js', //check
    },
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },


}; //end const config

  module.exports = config;