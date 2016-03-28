
var path = require('path');
var fs = require('fs');
var uuid = require('node-uuid');

exports.getHtml = function(req, res) {
    res.sendFile(path.join(__dirname , '../../client/index.html'));
}

exports.setPic = function(req,res) {
    console.log(req.body.img);
    var dataBuffer = new Buffer(req.body.img, 'base64');
    var _guidName = uuid.v1();
    fs.writeFile('Photos/' + _guidName + ".png", dataBuffer, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.send("Success!");
        }
    });
}