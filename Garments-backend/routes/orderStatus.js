var express = require('express');
var router = express.Router();

const OrderStatus = require('../models/orderStatus');



router.post('/', async (req, res) => {
    try {

        const existsChk = await OrderStatus.findOne({name: {"$regex": `^${req.body.name}$`, "$options": 1}}).exec();
        if (existsChk)
            throw new Error('Order Status Already exists')
        let numberOfOrderStatus = await OrderStatus.count().exec()
        if (numberOfOrderStatus == 0)
            req.body.defaultStatus = true
        await new OrderStatus(req.body).save();
        res.json({message: 'Order Status Added', success: true});
    }
    catch (err) {
        console.log(err);
        if (err.message)
            res.json({message: err.message, success: false})
        else
            res.json({message: 'Error', success: false})
    }
});


router.get('/', async (req, res) => {
    try {
        const arr = await OrderStatus.find().exec();
        res.json({message: 'order staus', data: arr, success: true});
    }
    catch (err) {
        console.log(err);
        if (err.message)
            res.json({message: err.message, success: false})
        else
            res.json({message: 'Error', success: false})
    }
});

router.patch('/updateStatus/:id', async (req, res) => {
    try {
        await OrderStatus.findByIdAndUpdate(req.params.id, req.body).exec();
        res.json({message: 'status updated', success: true});
    }
    catch (err) {
        console.log(err);
        if (err.message)
            res.json({message: err.message, success: false})
        else
            res.json({message: 'Error', success: false})
    }
});


router.delete('/removeStatus/:id', async (req, res) => {
    try {
        const order = await OrderStatus.findById(req.params.id).exec()
        if (order.defaultStatus)
            throw new Error('This cannot be deleted As this status is currently the default status, set another status as default before deleting thiids')
        await OrderStatus.findByIdAndRemove(req.params.id).exec();
        res.json({message: 'Removed', success: true});
    }
    catch (err) {
        console.log(err);
        if (err.message)
            res.json({message: err.message, success: false})
        else
            res.json({message: 'Error', success: false})
    }
});


router.patch('/setAsDefault/:id', async (req, res) => {
    try {
        const oldDefaults = await OrderStatus.find({defaultStatus: true}).exec();

        for (let obj of oldDefaults)
            await OrderStatus.findByIdAndUpdate(obj._id, {defaultStatus: false}).exec()

        await OrderStatus.findByIdAndUpdate(req.params.id, {defaultStatus: true}).exec();

        res.json({message: 'status updated', success: true});
    }
    catch (err) {
        console.log(err);
        if (err.message)
            res.json({message: err.message, success: false})
        else
            res.json({message: 'Error', success: false})
    }
});



module.exports = router
