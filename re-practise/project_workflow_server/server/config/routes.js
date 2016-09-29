const appCtrl = require('../controller');

var multer = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'e:\\ImageServer')
    },
    filename: function (req, file, cb) {
        console.log(file);
        cb(null, file.fieldname + '-' + Date.now() + '.png')
    }
})
var upload = multer({storage: storage});


module.exports = function (app) {
    app.get('/', appCtrl.pageService.renderIndex);
    app.get('/areas', appCtrl.areaService.AreaAll);
    app.post('/area', appCtrl.areaService.AreaInsert)
    app.delete('/area/:id', appCtrl.areaService.AreaDelete)
    app.put('/area/:id', appCtrl.areaService.AreaUpdate)

    app.get('/subareas', appCtrl.subareaService.SubAreaAll);
    app.post('/subarea', appCtrl.subareaService.SubAreaInsert)
    app.delete('/subarea/:id', appCtrl.subareaService.SubAreaDelete)
    app.put('/subarea/:id', appCtrl.subareaService.SubAreaUpdate)
}

