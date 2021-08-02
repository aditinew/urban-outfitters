let mongoose = require('mongoose')
let commission = mongoose.Schema({
    value: Number,
});
module.exports = mongoose.model('Commission', commission)
