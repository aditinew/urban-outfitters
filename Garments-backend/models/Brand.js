var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Brand = new Schema({
    name: String,
});

module.exports = mongoose.model('Brand', Brand);


