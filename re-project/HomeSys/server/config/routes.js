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
    app.get('/daily', appCtrl.dailyService.DailyAll);
    app.get('/daily/:date', appCtrl.dailyService.DailyGetByDate);
    app.post('/daily', appCtrl.dailyService.DailyInsert)
    app.post('/dailyrich', appCtrl.dailyService.DailyRichInsert)
    app.post('/dailyseries', appCtrl.dailyService.DailySeriesInsert)
    app.delete('/daily/:id', appCtrl.dailyService.DailyDelete)
    app.put('/daily/:id', appCtrl.dailyService.DailyUpdate)

    app.get('/itemtype', appCtrl.itemTypeService.ItemTypeAll)

    app.get('/richitem', appCtrl.richItemService.RichItemAll);
    app.get('/richitem/:type', appCtrl.richItemService.RichItemByType);
    app.post('/richitem', appCtrl.richItemService.RichItemInsert)
    app.delete('/richitem/:id', appCtrl.richItemService.RichItemDelete)
    app.put('/richitem/:id', appCtrl.richItemService.RichItemUpdate)
}

