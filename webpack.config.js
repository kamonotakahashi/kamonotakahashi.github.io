const path = require('path');

module.exports = {
    entry: `./src/index.js`,
    mode: "development",
    output: {
        path: path.resolve(__dirname, './dist/js'),
        publicPath: "/js/",
        filename: "main.js",
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, './dist/'),
        host: "127.0.0.1",
        port: 8080,
        open: true,
    },
};
