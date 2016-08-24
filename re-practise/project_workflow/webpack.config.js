var objectAssign = require('babel-plugin-object-assign');
var path = require('path');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        "./client.js",
    ],
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/build/',
        filename: 'bundle.js'
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
        ]
    }
}