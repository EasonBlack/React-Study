var objectAssign = require('babel-plugin-object-assign');
var path = require('path');

module.exports = {
    entry: "./client.js",
    output: {
        path: path.resolve(__dirname, './build'),
        filename: "bundle.js",
        publicPath: '/build/',
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
            }
            , {test: /\.dust$/, loader: "dust-loader-complete"}
        ]
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        inline: false
    },
}