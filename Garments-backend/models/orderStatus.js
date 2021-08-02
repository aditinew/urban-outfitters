let mongoose = require('mongoose')
let orderStatus = mongoose.Schema({
    name: String,
    defaultStatus: {
        type: Boolean,
        default: false
    }
});
module.exports = mongoose.model('OrderStatus', orderStatus)
