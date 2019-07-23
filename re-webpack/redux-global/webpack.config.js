var webpack = require('webpack');
var path = require('path')
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, './build'),
        filename: "bundle.js",
        publicPath: '/build/'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/, exclude: /node_modules/,
                use: [{
                  loader: 'babel-loader', query: { presets: ['es2015', 'react'] }
                }]
            },
        ]
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',

        redux: 'Redux',
        'react-redux': "ReactRedux"
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        inline: false
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerPort: 8888
        })
      
    ]
}