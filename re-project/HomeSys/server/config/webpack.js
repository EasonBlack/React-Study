var webpack = require('webpack');
var config = require('../../webpack.config.js');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');


module.exports = function(app){
    var compiler = webpack(config);
    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        stats: {
            colors: true,
            chunkModules: false
        },
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    }));
    app.use(webpackHotMiddleware(compiler, { heartbeat: 10 * 1000}));

}


