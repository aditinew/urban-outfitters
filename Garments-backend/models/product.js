let mongoose = require('mongoose')

let product = mongoose.Schema({
    name: String,
    subHeading: String,
    mrp: Number,
    categoryId: String,
    categoryIdArr: Array,
    filterIdArr: Array,
    productSpecificationArr: Array,
    minQuantity: Number,
    setItemQuantity: Number,
    description: String,
    productCode: String,
    sellerId: String,
    offersArr: Array,
    deliveryOptions: Array,
    thumbnailImage: String,
    imageArray: Array,
    codChk: {
        type: Boolean,
        default: true
    },
    brandId: String,
    sampleCost: Number,
    stock: Number,
    numberOfItemsSold: Number,
    amountSpentOnItem: Number,
})

module.exports = mongoose.model('Product', product);
