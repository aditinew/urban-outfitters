let express = require('express');
let router = express.Router();

let {v4: uuidv4} = require('uuid');
let Insta = require('instamojo-nodejs');

let Order = require('../models/order');
let Commission = require('../models/commission');
let OrderStatus = require('../models/orderStatus');
let Retailer = require('../models/retailer');
let Product = require('../models/product');
let Discount = require('../models/discountCode');
let Seller = require('../models/seller');


/* GET home page. */
router.get('/validOrders', async (req, res) => {
  try {
    const arr = await Order.find({valid: true}).lean().exec();

    for (let ele of arr) {
      ele.productsArr = [];

      ele.productObj = await Product.findById(ele.productId).lean().exec();
      ele.sellerObj = await Seller.findById(ele.sellerId).lean().exec();
      ele.currentOrderStatusObj = await OrderStatus.findById(ele.orderStatusArr[ele.orderStatusArr.length - 1]).exec()

    }

    res.json({message: 'Orders Found', data: arr, success: true});
  }
  catch (err) {
    console.log(err);
    if (err.message)
      res.json({message: err.message, success: false})
    else
      res.json({message: 'Error', success: false})
  }
});

router.get('/validOrdersByRetailerId/:id', async (req, res) => {
  try {
    const arr = await Order.find({valid: true, retailerId: req.params.id}).lean().exec();

    for (let ele of arr) {
      ele.productsArr = [];

      ele.productObj = await Product.findById(ele.productId).lean().exec();
      ele.sellerObj = await Seller.findById(ele.sellerId).lean().exec();
      ele.currentOrderStatusObj = await OrderStatus.findById(ele.orderStatusArr[ele.orderStatusArr.length - 1]).exec()

    }

    res.json({message: 'Orders Found', data: arr, success: true});
  }
  catch (err) {
    console.log(err);
    if (err.message)
      res.json({message: err.message, success: false})
    else
      res.json({message: 'Error', success: false})
  }
});

router.get('/validOrdersBySellerId/:id', async (req, res) => {
  try {
    const arr = await Order.find({valid: true, sellerId: req.params.id}).lean().exec();

    for (let ele of arr) {
      ele.productsArr = [];

      ele.productObj = await Product.findById(ele.productId).lean().exec();
      ele.sellerObj = await Seller.findById(ele.sellerId).lean().exec();
      ele.currentOrderStatusObj = await OrderStatus.findById(ele.orderStatusArr[ele.orderStatusArr.length - 1]).exec()

    }

    res.json({message: 'Orders Found', data: arr, success: true});
  }
  catch (err) {
    console.log(err);
    if (err.message)
      res.json({message: err.message, success: false})
    else
      res.json({message: 'Error', success: false})
  }
});


router.post('/', async (req, res) => {
  try {

    console.log(req.body)

    const retailer = await Retailer.findById(req.body.retailerId).exec();
    if (!retailer) {
      throw new Error('Please Login')
    }

    let commissionObj = await Commission.findOne().lean().exec()

    if(!commissionObj)
    {
      const newCommission = await new Commission({value:5}).save(); // set default commissio to 5%
      commissionObj = newCommission;
    }

    let productsArr = [];

    for (let el of req.body.cartArr) {
      let productObj = await Product.findById(el.productId).lean().exec();
      let obj = {
        quantity: el.quantity,
        ...productObj
      }

      if ((el.quantity * productObj.setItemQuantity) > productObj.stock)
        throw new Error(`${productObj.name} does not have enough stock please try again later `)


      productsArr.push(obj)
    }

    let mainAmount = 0;
    let discountAmount = 0;
    let discountObj;
    let finalAmount = 0;

    if (req.body.discountId) {
      discountObj = await Discount.findById(req.body.discountId).lean().exec()
    }

    // calulate ammount 
    productsArr.forEach(el => {
      let totalNumberOfItems = 0;
      totalNumberOfItems = el.quantity * el.setItemQuantity;
      let objPrice = totalNumberOfItems * el.mrp;
      mainAmount += objPrice;
      el.mainAmount = objPrice;
    })


    if (discountObj) {

      if (discountObj.type == 1)
        discountAmount = mainAmount * discountObj.value / 100
      else if (discountObj.type == 2)
        discountAmount = discountObj.value


      if (discountObj.maxDiscount)
        if (discountAmount > discountObj.maxDiscount)
          discountAmount = discountObj.maxDiscount;

    }



    finalAmount = mainAmount - discountAmount;

    let commissionAmount = finalAmount*commissionObj.value/100;
    finalAmount = finalAmount + commissionAmount

    let gstAmount = finalAmount*5/100;
    finalAmount= finalAmount + gstAmount;
    
    console.log(mainAmount)


    let orderIdArr = [];
    let orderSaveArr = productsArr.map(el => {
    let costFraction = el.mainAmount / mainAmount;

      let obj = {
        retailerId: retailer._id,
        productId: el._id,
        sellerId: el.sellerId,
        quantity: el.quantity,
        orderStatusArr: [],
        discountObj: discountObj,
        billingObj: req.body.billingObj,
        amount: finalAmount,
        originalAmount: mainAmount,
        discountAmount: discountAmount * costFraction,
        commissionAmount:commissionAmount,
        commissionPercentage:commissionObj.value,
        gstAmount:gstAmount,
        gstPercentage:5,
      }

      return obj
    })

    for (let obj of orderSaveArr) {
      let newOrder = await new Order(obj).save();
      orderIdArr.push(`${newOrder._id}`)
    }


    // generate orderIdQueryString for the redirect url
    let orderIdQueryString = ''

    orderIdArr.forEach(el => {
      orderIdQueryString = orderIdQueryString + `&orderIdArr[]=${el}`
    })



    //////////////////////////////payment
    Insta.setKeys('test_ac6c027a59cd53e60732eff67fe', 'test_356206b1bea68d2bf3eedb9261f');

    var data = new Insta.PaymentData();

    Insta.isSandboxMode(true);

    data.purpose = "Payment For Order";
    data.amount = finalAmount;

    if (req.body.billingObj.email) {
      data.email = req.body.billingObj.email;
    }
    if (req.body.billingObj.name) {
      data.buyer_name = req.body.billingObj.name;
    }

    data.send_email = false;
    data.phone = req.body.billingObj.phone

    data.redirect_url = `https://api.garmentsinfomedia.com/order/paymentCb/?retailer_id=${retailer._id}${orderIdQueryString}`;
    // data.redirect_url = `http://localhost:3000/order/paymentCb/?retailer_id=${retailer._id}${orderIdQueryString}`;
    //sdata.setRedirectUrl(redirectUrl);
    //data.webhook= '/webhook/';

    data.send_sms = false;
    data.allow_repeated_payments = false;

    Insta.createPayment(data, function (error, response) {
      if (error) {
        // // some error
        console.log(error);
      } else {
        //Payment redirection link at response.payment_request.longurl

        const responseData = JSON.parse(response);
        console.log(responseData);
        if (responseData.success == false)
        {
          res.json({ message:"Error, Please input your billing details correctly", data:responseData, success:false })

        }
        else
      {


        const redirectUrl = responseData.payment_request.longurl;
        // console.log(redirectUrl);
        res.json({message: 'RedirectUrl', data: redirectUrl, success: true});
      }
      }
    });

  }
  catch (err) {
    console.log(err);
    if (err.message)
      res.json({message: err.message, success: false})
    else
      res.json({message: 'Error', success: false})
  }
});



router.get('/paymentCb', async (req, res) => {
  try {

    if (req.query.payment_id) {
      let defaultOrderStatus = await OrderStatus.findOne({defaultStatus: true}).exec()
      for (let order_id of req.query.orderIdArr) {
        const order = await Order.findByIdAndUpdate(order_id, {paymentId: req.query.payment_id, valid: true, $push: {orderStatusArr: defaultOrderStatus}}).exec();
        console.log(order);

        const product = await Product.findById(order.productId).exec()
        let calculateAmountSpentOnItem = order.amount;
        if (product.amountSpentOnItem)
          calculateAmountSpentOnItem += product.amountSpentOnItem;
        const productObj = await Product.findByIdAndUpdate(order.productId, {stock: parseInt(product.stock) - parseInt(order.quantity), amountSpentOnItem: calculateAmountSpentOnItem}).exec();
      }
      const retailer = await Retailer.findByIdAndUpdate(req.query.retailer_id, {cart: []}).exec()
      console.log(retailer)
    }
    res.redirect('https://www.garmentsinfomedia.com')
    // res.redirect('http://localhost:4200/')
  }
  catch (err) {
    console.log(err);
    if (err.message)
      res.json({message: err.message, success: false})
    else
      res.json({message: 'Error', success: false})
  }
})


router.post('/buySample', async (req, res) => {
  try {

    console.log(req.body)

    const retailer = await Retailer.findById(req.body.retailerId).exec();
    if (!retailer) {
      throw new Error('Please Login')
    }


    const productObj = await Product.findById(req.body.productId).exec();


    let obj = {
      retailerId: retailer._id,
      productId: productObj._id,
      sellerId: productObj.sellerId,
      orderStatusArr: [],
      billingObj: req.body.billingObj,
      amount: productObj.sampleCost,
      sampleBool: true,
    }

    const newOrder = await new Order(obj).save();


    // generate orderIdQueryString for the redirect url



    //////////////////////////////payment
    Insta.setKeys('test_ac6c027a59cd53e60732eff67fe', 'test_356206b1bea68d2bf3eedb9261f');

    var data = new Insta.PaymentData();

    Insta.isSandboxMode(true);

    data.purpose = "Payment For Order";
    data.amount = productObj.sampleCost;

    if (req.body.billingObj.email) {
      data.email = req.body.billingObj.email;
    }
    if (req.body.billingObj.name) {
      data.buyer_name = req.body.billingObj.name;
    }

    data.send_email = false;
    if (req.body.billingObj.phone)
      data.phone = req.body.billingObj.phone

    // data.redirect_url = `https://appi.internnexus.com/company/cb/:id?comp_id=${id}&amount=${req.body.amount}`;
    data.redirect_url = `https://api.garmentsinfomedia.com/order/samplePaymentCb/?retailer_id=${retailer._id}&order_id=${newOrder._id}`;
    // data.redirect_url = `http://localhost:3000/order/samplePaymentCb/?retailer_id=${retailer._id}&order_id=${newOrder._id}`;
    //sdata.setRedirectUrl(redirectUrl);
    //data.webhook= '/webhook/';

    data.send_sms = false;
    data.allow_repeated_payments = false;

    Insta.createPayment(data, function (error, response) {
      if (error) {
        // // some error
        console.log(error);
      } else {
        //Payment redirection link at response.payment_request.longurl

        const responseData = JSON.parse(response);
        console.log(responseData);
        if (responseData.success == false)
          throw new Error('Please input your Billing Details Correctly')
        const redirectUrl = responseData.payment_request.longurl;
        // console.log(redirectUrl);
        res.json({message: 'RedirectUrl', data: redirectUrl, success: true});
      }
    });

  }
  catch (err) {
    console.log(err);
    if (err.message)
      res.json({message: err.message, success: false})
    else
      res.json({message: 'Error', success: false})
  }
});


router.get('/samplePaymentCb', async (req, res) => {
  try {

    if (req.query.payment_id) {
      const defaultOrderStatus = await OrderStatus.findOne({defaultStatus: true}).exec()
      const order = await Order.findByIdAndUpdate(req.query.order_id, {paymentId: req.query.payment_id, valid: true, $push: {orderStatusArr: defaultOrderStatus._id}}).exec();
    }
    res.redirect('https://www.garmentsinfomedia.com')
    // res.redirect('http://localhost:4200/')
  }
  catch (err) {
    console.log(err);
    if (err.message)
      res.json({message: err.message, success: false})
    else
      res.json({message: 'Error', success: false})
  }
})


router.patch('/addOrderStatus/:id', async (req, res) => {
  try {

    console.log(req.body)

    const order = await Order.findByIdAndUpdate(req.params.id, {$push: {orderStatusArr: req.body.orderStatusId}}).exec();
    if (!order)
      throw new Error('Order Not Found')

    res.json({message: 'Order Status Updated', success: true});
  }
  catch (err) {
    console.log(err);
    if (err.message)
      res.json({message: err.message, success: false})
    else
      res.json({message: 'Error', success: false})
  }
});


router.patch('/markOrderAsCompleted/:id', async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, {completedBool: true}).exec();
    res.json({message: "Order Marked as completed", success: true});
  }
  catch (err) {
    console.log(err);
    if (err.message)
      res.json({message: err.message, success: false})
    else
      res.json({message: 'Error', success: false})
  }
});



module.exports = router;
