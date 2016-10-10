const appCtrl = require('../controller');

module.exports = function (app) {
    app.get('/', appCtrl.pageService.renderIndex);
    app.get('/check', appCtrl.authService.check);
}

