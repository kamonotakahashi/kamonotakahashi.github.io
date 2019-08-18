var path = require('path');
var webpack = require('webpack');
const { VueLoaderPlugin } = require("vue-loader");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: `./src/index.js`,
    mode: "development",
    output: {
        path: path.resolve(__dirname, './dist/'),
        publicPath: "/",
        filename: "main.js",
    },
    module: {
        rules: [
           {
             test: /\.vue$/,
             loader: "vue-loader",
           },
           {
             test: /\.vue\.html$/,
             loader: "vue-loader"
         },
         {
           test: /\.js$/,
           exclude: /node_modules/,
           use: {
               loader: "babel-loader",
           }
         },
           {
             test: /\.css$/,
             loader: 'style-loader!css-loader',
             //loader: "style-loader"
         },
            {
              test: /\.scss$/,
              use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
              })
          },
            {
              test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
              loader: 'url-loader'
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new VueLoaderPlugin()
    ],
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.join(__dirname, './dist/'),
        host: "127.0.0.1",
        port: 8080,
        open: true,
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
};
