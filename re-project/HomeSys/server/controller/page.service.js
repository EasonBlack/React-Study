var path = require('path');
var fs = require('fs');

exports.renderIndex = function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/index.html'));
}





