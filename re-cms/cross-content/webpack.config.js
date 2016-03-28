module.exports = {
    entry: "./src/main.js",
    output: {
        path: "./build",
        filename: "bundle.js"
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/, exclude: /node_modules/, loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
            , {test: /\.dust$/, loader: "dust-loader-complete"}
        ]
    }
}