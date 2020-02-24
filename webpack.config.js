const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = (env, argv) => {
    const IS_DEVELOPMENT = argv.mode === 'development';
    return {
        entry: `./src/index.ts`,
        mode: IS_DEVELOPMENT ? "development" : "production",
        output: {
            path: path.resolve(__dirname, './dist/assets/'),
            publicPath: "/",
            filename: "js/main.js",
        },
        devtool: IS_DEVELOPMENT ? 'inline-source-map' : 'none',
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
                test: /\.ts$/,
                exclude: /node_modules|vue\/src/,
                loader: 'ts-loader',
                options: {
                  appendTsSuffixTo: [/\.vue$/],
                },
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
                 test: /\.(jpg|png|svg|gif)$/,
                 loaders: 'file-loader?name=[name].[ext]'
             },
                {
                  test: /\.scss$/,
                  use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                  ],
              },
                {
                  test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
                  loader: 'url-loader'
                },
                {
                  test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                  use: [
                    {
                      loader: 'url-loader?limit=100000&name=img/[name].[ext]',
                    },
                  ],
                },
            ]
        },
        plugins: [
            new VueLoaderPlugin(),
            new MiniCssExtractPlugin({
              filename: '/css/style.css'
            }),
            new webpack.ProvidePlugin({
                  $: 'jquery',
                  jQuery: 'jquery'
            }),
            new CopyWebpackPlugin([
              {
                from: path.resolve(__dirname, 'src/assets/images/'),
                to: path.resolve(__dirname, 'dist/assets/img/'),
              },
            ]),
            new ImageminPlugin({
              test: /\.(jpe?g|png|gif|svg)$/i,
              pngquant: {
                quality: '50-70',
              },
            }),
        ],
        devServer: {
            contentBase: path.join(__dirname, './dist/'),
            host: "127.0.0.1",
            port: 8080,
            open: true,
            historyApiFallback: true,
        },
        resolve: {
            extensions: ['.ts', '.vue', '.scss', 'json'],
            alias: {
              '@': path.resolve('src')
            }
        },
        performance: {
            hints: false
        },
    }
};
