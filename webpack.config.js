var path = require('path');
var webpack = require('webpack');
const { VueLoaderPlugin } = require("vue-loader");


module.exports = {
    entry: `./src/index.js`,
    mode: "development",
    output: {
        path: path.resolve(__dirname, './dist/js'),
        publicPath: "/js/",
        filename: "main.js",
    },
    module: {
        rules: [
           {
             test: /\.vue$/,
             loader: "vue-loader"
           },
           {
             test: /\.vue\.html$/,
             loader: "vue-loader"
           },
        ]
    },
    plugins: [
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
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
};
