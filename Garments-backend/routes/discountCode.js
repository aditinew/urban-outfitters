let express = require('express');
let router = express.Router();

let DiscountCode = require('../models/discountCode');

router.post('/', async (req, res) => {
    try {
        const existChk = await DiscountCode.findOne({code: req.body.code}).exec()
        if (existChk)
            throw new Error('Code already exists use new code');
        await new DiscountCode(req.body).save();
        res.json({message: 'Added', success: true})
    }
    catch (err) {
        console.error(err)
        res.json({message: err.message, data: err, success: false})

    }
})


router.patch('/updateById/:id', async (req, res) => {
    try {
        const dcode = await DiscountCode.findById(req.params.id);
        if (!dcode)
            throw new Error('DiscountCode not Found try again')

        const existChk = await DiscountCode.findOne({code: req.body.code}).exec()
        if (existChk && dcode._id != existChk._id)
            throw new Error('Code already exists use new code');
        await DiscountCode.findOneAndUpdate(req.params.id, req.body).exec()
        res.json({message: 'updated', success: true})
    }
    catch (err) {
        console.error(err)
        res.json({message: err.message, data: err, success: false})

    }
})


router.get('/getById/:id', async (req, res) => {
    try {
        const dcObj = await DiscountCode.findById(req.params.id).exec()
        if (!dcObj)
            throw new Error('Not Found')
        res.json({message: 'get by id', data: dcObj, success: true})
    }
    catch (err) {
        console.error(err)
        res.json({message: err.message, data: err, success: false})

    }
})

router.delete('/deleteById/:id', async (req, res) => {
    try {
        const dcObj = await DiscountCode.findByIdAndDelete(req.params.id).exec()
        res.json({message: 'deleted', data: dcObj, success: true})
    }
    catch (err) {
        console.error(err)
        res.json({message: err.message, data: err, success: false})

    }
})
router.get('/', async (req, res) => {
    try {
        const dcArr = await DiscountCode.find().exec()
        res.json({message: 'get all discountCodes', data: dcArr, success: true})
    }
    catch (err) {
        console.error(err)
        res.json({message: err.message, data: err, success: false})

    }
})


router.get('/validateCode/:code', async (req, res) => {
    try {
        const dcObj = await DiscountCode.findOne({code: req.params.code}).exec()
        if (!dcObj)
            throw new Error('Discount code is not valid')
        let currentTime = new Date();
        if (currentTime.getTime() < new Date(dcObj.validFrom).getTime())
            throw new Error('Discount code is not valid')
        if (currentTime.getTime() > new Date(dcObj.validTill).getTime())
            throw new Error('Discount code is not valid')
        res.json({message: 'Discount Code Valid', data: dcObj, success: true})
    }
    catch (err) {
        console.error(err)
        res.json({message: err.message, data: err, success: false})

    }
})

module.exports = router
