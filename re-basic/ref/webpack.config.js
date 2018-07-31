var webpack = require('webpack');
var path = require('path')

module.exports = {
    entry: "./app.js",
    output: {
        path: path.resolve(__dirname, './build'),
        filename: "bundle.js",
        publicPath: '/'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/, exclude: /node_modules/,  loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-assign']
                }
            },
            {
                test: /\.css/,
                loader: "style-loader!css-loader"
            }
        ]
    }
}