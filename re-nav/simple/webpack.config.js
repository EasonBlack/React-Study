var webpack = require('webpack');

module.exports = {
    entry: "./client.js",
    output: {
        path: './build',
        filename: "bundle.js",
        publicPath: '/'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/, exclude: /node_modules/,  loader: 'babel',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-assign']
                }
            },
            {
                test: /\.css/,
                loader: "style!css"
            }
        ]
    }
}