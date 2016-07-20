var objectAssign = require('babel-plugin-object-assign');

module.exports = {
    entry: "./client.js",
    output: {
        path: "./build",
        filename: "bundle.js"
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