const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');


//config for webpack with babel
const config = {
    entry: {
      app: './public/index.js',
    //   favorites: './assets/js/favorites.js', //multiple enrry points?
    //   topic: './assets/js/topic.js',
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



    //Plugins

  
  module.exports = config;