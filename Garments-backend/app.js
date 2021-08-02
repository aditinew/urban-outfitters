var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let mongoose = require('mongoose');
var cors = require('cors')


let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let adminRouter = require('./routes/admin');
let sellerRouter = require('./routes/seller');
let retailerRouter = require('./routes/retailer')
let categoryRouter = require('./routes/category');
let filterConditionsRouter = require('./routes/filterConditions');
let productRouter = require('./routes/product');
let discountCodeRouter = require('./routes/discountCode');
let productSpecificationRouter = require('./routes/productSpecification');
let OrderStatusRouter = require('./routes/orderStatus');
let OrderRouter = require('./routes/order');
let BrandRouter = require('./routes/brand');
let CommissionRouter = require('./routes/commission');


var app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost:27017/gim', {useNewUrlParser: true, useUnifiedTopology: true}, err => {
    if (err)
        console.error(err)
    else
        console.log("Database has been connected");
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);
app.use('/seller', sellerRouter);
app.use('/retailer', retailerRouter);
app.use('/category', categoryRouter);
app.use('/filterConditions', filterConditionsRouter);
app.use('/product', productRouter);
app.use('/discountCode', discountCodeRouter);
app.use('/productSpecification', productSpecificationRouter);
app.use('/OrderStatus', OrderStatusRouter);
app.use('/order', OrderRouter);
app.use('/brand', BrandRouter);
app.use('/commission', CommissionRouter);

module.exports = app;
