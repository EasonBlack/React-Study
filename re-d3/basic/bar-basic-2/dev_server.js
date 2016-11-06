var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');


new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    }
}).listen(5003, 'localhost', function (err, result) {
    if (err) {
        return console.log(err);
    }
    console.log('Listening at http://localhost:5003/');
});