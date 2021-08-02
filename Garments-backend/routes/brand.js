let express = require('express');
let router = express.Router();

let Brand = require('../models/Brand');

router.post('/', async (req, res) => {
    try {
        await new Brand(req.body).save();
        res.json({message: 'Added', success: true})
    }
    catch (err) {
        console.error(err)
        res.json({message: err.message, data: err, success: false})
    }
})


router.patch('/updateById/:id', async (req, res) => {
    try {
        await Brand.findOneAndUpdate(req.params.id, req.body).exec()
        res.json({message: 'updated', success: true})
    }
    catch (err) {
        console.error(err)
        res.json({message: err.message, data: err, success: false})

    }
})


router.get('/getById/:id', async (req, res) => {
    try {
        const obj = await Brand.findById(req.params.id).exec()
        if (!obj)
            throw new Error('Not Found')
        res.json({message: 'get by id', data: obj, success: true})
    }
    catch (err) {
        console.error(err)
        res.json({message: err.message, data: err, success: false})

    }
})

router.delete('/deleteById/:id', async (req, res) => {
    try {
        const deleteObj = await Brand.findByIdAndDelete(req.params.id).exec()
        res.json({message: 'deleted', data: deleteObj, success: true})
    }
    catch (err) {
        console.error(err)
        res.json({message: err.message, data: err, success: false})

    }
})
router.get('/', async (req, res) => {
    try {
        const arr = await Brand.find().exec()
        res.json({message: 'get all discountCodes', data: arr, success: true})
    }
    catch (err) {
        console.error(err)
        res.json({message: err.message, data: err, success: false})

    }
})

module.exports = router;
