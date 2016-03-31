var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PointSchema = new Schema({
    x: String,
    y: String,
    name: String,
    comment: String
});

var PhotoSchema = new Schema({
    id: String,
    file: String,
    w: String,
    h: String,
    screenWidth: String,
    screenHeight: String,
    points: [PointSchema]
});

var Photos = mongoose.model('Photo', PhotoSchema);

module.exports = Photos;