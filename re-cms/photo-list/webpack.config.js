var webpack = require('webpack');

module.exports = {
    entry: "./client/client.js",
    output: {
        path: './client/build',
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
            }
            , {test: /\.dust$/, loader: "dust-loader-complete"}
        ]
    }
}