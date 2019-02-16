var webpack = require('webpack');
var path = require('path')

module.exports = {
    entry: "./app.js",
    output: {
        path: path.resolve(__dirname, './build'),
        filename: "bundle.js",
        publicPath: '/build/'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/, exclude: /node_modules/,  loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']  
                }
            },
            {
                test: /\.css/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.scss/,
                loader: "style-loader!css-loader!sass-loader"
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        inline: false
    }
}