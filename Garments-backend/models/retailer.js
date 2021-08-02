let mongoose = require('mongoose')

let retailer = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: Number,
  businessName: String,
  forgotPassword: String,
  cart: Array,
  docs: String,
  docName: String,
  docVerificationFlag: { // 0 no document, 1 document uploaded , 2 document verified, -1 document rejected
    type: Number,
    default: 0
  },
  docMessage: String, // message admin to seller for accepting or rejecting the document
})

module.exports = mongoose.model('Retailer', retailer);
