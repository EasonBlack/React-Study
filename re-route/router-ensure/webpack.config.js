var webpack = require('webpack');

module.exports = {
    entry: "./client.js",
    // output: {
    //     path: './build',
    //     filename: "bundle.js",
    //     publicPath: '/'
    // },
    output: {
        path: './build',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        publicPath: './build/'
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