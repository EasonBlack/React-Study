var path = require('path');
var fs = require('fs');
var uuid = require('node-uuid');
var Photos = require('../model/PhotoSchema');

exports.getHtml = function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/index.html'));
}

exports.getPhotos = function (req, res) {
    Photos.find({}, function(err, photos) {
        if (err) throw err;
        res.send(photos);
    });
}

exports.savePoints = function (req, res) {
    var points = req.body.points;
    var id = req.body.id;
    console.log(id);
    Photos.findOne({id: id }, function (err, photo) {
        for(var i=0;i<points.length;i++){
            photo.points.push(points[i]);
        }
        photo.save(function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('Success save points!');
                res.send("Success save points!");
            }
        });
    });

}

exports.setPic = function (req, res) {

    var dataBuffer = new Buffer(req.body.img, 'base64');
    var _guidName = uuid.v1();
    fs.writeFile('Photos/' + _guidName + ".png", dataBuffer, function (err) {
        console.log('save start: ', _guidName);
        if (err) {
            console.log('save error');
            console.log(err);
            res.send(err);
        } else {

            savePhoto({
                id: req.body.id,
                file: '/Photos/' + _guidName + ".png",
                screenWidth: req.body.screenWidth,
                screenHeight: req.body.screenHeight,
                h: req.body.height,
                w: req.body.width
            }, function (id) {
                console.log('save success');
                res.send({
                    message: 'success',
                    id: id
                });
            });

        }
    });
}

function savePhoto(obj, callback) {
    var newPhoto = new Photos({
        id: obj.id,
        file: obj.file,
        screenWidth: obj.screenWidth,
        screenHeight: obj.screenHeight,
        h: obj.h,
        w: obj.w
    });
    newPhoto.save(function (err, photo) {
        if (err) throw err;
        console.log(photo);
        callback(photo._id);
        console.log('Photo created!');
    });
}