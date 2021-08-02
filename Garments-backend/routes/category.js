var express = require('express');
var router = express.Router();


const Category = require('../models/category');
let {upload} = require('../utils/aws')

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        let categoryExists = await Category.findOne({name: req.body.name}).lean().exec();
        if (categoryExists)
            throw new Error('Category Already Exists')
        if (req.body.parentId) {
            let parentCategory = await Category.findById(req.body.parentId).lean().exec();

            let parentCategoryArr = parentCategory.parentCategoryArr;

            parentCategoryArr.push(parentCategory._id);
            let level = parentCategory.level + 1;
            let obj = {
                name: req.body.name,
                parentCategoryArr,
                level,
            }


            const newCategory = await new Category(obj).save();

            const parentUpdate = await Category.findByIdAndUpdate(parentCategory._id, {$push: {subCategoryArr: `${newCategory._id}`}}).exec();
            res.json({message: 'SubCategory Created', data: newCategory._id, success: true});


        }

        else {
            console.log(req.body)
            let obj = {
                name: req.body.name,
            }
            const category = await new Category(obj).save();
            res.json({message: 'Category Category', data: category._id, success: true});

        }
    }
    catch (err) {
        console.log(err);
        if (err.message)
            res.json({message: err.message, success: false})
        else
            res.json({message: 'Error', success: false})
    }
});

router.patch('/updateImage/:id', upload.single('file'), async (req, res) => {
    try {
        await Category.findByIdAndUpdate(req.params.id, {categoryImage: res.req.file.location}).exec();
        res.json({message: 'Category Added', success: true});
    }
    catch (err) {
        console.log(err);
        if (err.message)
            res.json({message: err.message, success: false})
        else
            res.json({message: 'Error', success: false})
    }
})

router.get('/getById/:id', async (req, res) => {
    try {
        const category = await Category.findById(req.params.id).exec();
        res.json({message: 'data', data: category, success: true});
    }
    catch (err) {
        console.log(err);
        if (err.message)
            res.json({message: err.message, success: false})
        else
            res.json({message: 'Error', success: false})
    }
})

router.get('/', async (req, res) => {
    try {
        const category = await Category.find().exec();
        res.json({message: 'data', data: category, success: true});
    }
    catch (err) {
        console.log(err);
        if (err.message)
            res.json({message: err.message, success: false})
        else
            res.json({message: 'Error', success: false})
    }
})

router.delete('/deleteById/:id', async (req, res) => {
    try {
        const category = await Category.findById(req.params.id).exec();


        if (category.subCategoryArr.length > 0)
            throw new Error('Has Sub categories Please delete them first')

        if (category.parentCategoryArr.length > 0) {
            for (let el of category.parentCategoryArr) {
                const obj = await Category.findByIdAndUpdate(el, {$pull: {subCategoryArr: el}}).exec();
            }
        }

        await Category.findByIdAndDelete(req.params.id).exec();

        res.json({message: 'Category Deleted', success: true});


    }
    catch (err) {
        console.error(err);
        if (err.message)
            res.json({message: err.message, data: err, success: false});
        else
            res.json({message: 'Error', data: err, success: false});
    }
})

router.get('/getByName/:name', async (req, res) => {
    try {
        const category = await Category.findOne({name: req.params.name}).exec();
        let categoryArr = []
        for (let el of category.subCategoryArr) {
            const tempCategory = await Category.findById(el).exec();
            if (tempCategory) {
                categoryArr.push(tempCategory);
            }
        }
        res.json({message: 'category Data', data: categoryArr, success: true});
    }
    catch (err) {
        console.log(err);
        if (err.message)
            res.json({message: err.message, success: false})
        else
            res.json({message: 'Error', success: false})
    }
})


module.exports = router;
