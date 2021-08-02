let mongoose = require('mongoose')
let order = mongoose.Schema({
  retailerId: String,
  paymentId: String,
  // cart: Array,
  productId: String,
  sellerId: String,
  quantity: Number,
  orderStatusArr: Array,
  discountObj: Object,
  valid: {
    default: false,
    type: Boolean
  },
  billingObj: Object,
  amount: Number, // this is the amount after the calculation of the discount, commission and gst
  originalAmount: Number, // this is the amount before the calculations
  discountAmount: Number,
  commissionAmount: Number,
  gstAmount: Number,
  commissionPercentage: Number,
  gstPercentage: Number,
  sampleBool: {
    default: false,
    type: Boolean
  },
  completedBool: {
    default: false,
    type: Boolean
  },
});
module.exports = mongoose.model('Order', order);

