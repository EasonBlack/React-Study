
var path = require('path');
var fs = require('fs');
var uuid = require('node-uuid');
var Photos = require('../model/PhotoSchema');

exports.getHtml = function(req, res) {
    res.sendFile(path.join(__dirname , '../../client/index.html'));
}

exports.setPic = function(req,res) {

    var dataBuffer = new Buffer(req.body.img, 'base64');
    var _guidName = uuid.v1();
    fs.writeFile('Photos/' + _guidName + ".png", dataBuffer, function (err) {
        console.log('save start: ', _guidName);
        if (err) {
            console.log('save error');
            console.log(err);
            res.send(err);
        } else {
            console.log('save success');
            savePhoto({
                file: '/Photos/' + _guidName + ".png",
                h: req.body.height,
                w: req.body.width
            });
            res.send("Success!");
        }
    });
}

function savePhoto(obj) {
    var newPhoto = new Photos({
        file: obj.file,
        h: obj.h,
        w: obj.w
    });
    newPhoto.save(function(err) {
        if (err) throw err;
        console.log('Photo created!');
    });
}