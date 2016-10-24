var path = require("path");

module.exports = {
    entry: "./client.js",
    output: {
        path: __dirname + '/build',
        filename: "bundle.js",
        publicPath: 'http://localhost:8080/build/'
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/, exclude: /node_modules/,  loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css/,
                loader: "style!css"
            }
        ]
    }
}

