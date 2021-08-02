let express = require('express');
let router = express.Router();

let ProductSpecification = require('../models/productSpecification');
let Category = require('../models/category');

router.post('/', async (req, res) => {
    try {
        const existCheck = await ProductSpecification.findOne({categoryId: req.body.categoryId}).exec();
        if (existCheck) {
            await ProductSpecification.findOneAndUpdate({categoryId: req.body.categoryId}, {$push: {specifications: req.body.specifications}}).exec()
        }
        else
            await new ProductSpecification(req.body).save();
        res.json({message: 'added', success: true})
    }
    catch (err) {
        if (err.message)
            res.json({message: err.message, data: err, success: false})
        else
            res.json({message: "Error", data: err, success: false})

    }
})

router.get('/getallSpecs', async (req, res) => {
    try {
        let arr = await ProductSpecification.find().lean().exec();
        for (let obj of arr) {
            let category = await Category.findById(obj.categoryId).exec();
            obj.categoryName = category.name



        }
        res.json({message: 'Arr', data: arr, success: true})
    }
    catch (err) {
        if (err.message)
            res.json({message: err.message, data: err, success: false})
        else
            res.json({message: "Error", data: err, success: false})

    }
})

router.get('/getById/:id', async (req, res) => {
    try {
        let obj = await ProductSpecification.findOne({categoryId: req.params.id}).exec();
        res.json({message: 'Obj', data: obj, success: true})
    }
    catch (err) {
        if (err.message)
            res.json({message: err.message, data: err, success: false})
        else
            res.json({message: "Error", data: err, success: false})

    }
})

router.delete('/deleteSpec/:id', async (req, res) => {
    try {
        let val = await ProductSpecification.findById({_id: req.params.id})
        if (val) {
            await val.remove()
            res.json({message: "product spec deleted sucessfully", success: true})
        }
        else
            throw new Error('something went wrong')

    } catch (err) {
        if (err) {
            res.json({message: err.message, data: err, success: false});
        }
        else {
            res.json({message: "ERROR", data: err, success: false})
        }

    }
})

module.exports = router
