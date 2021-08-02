let mongoose = require('mongoose');

let productSpecification = mongoose.Schema({
    categoryId: String,
    specifications: Array
})

module.exports = mongoose.model('ProductSpecification', productSpecification);
