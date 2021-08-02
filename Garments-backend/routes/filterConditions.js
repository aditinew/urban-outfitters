var express = require('express');
var router = express.Router();


let FilterCategory = require('../models/filterCondtions');


router.post('/', async (req, res) => {
    try {
        console.log(req.body)

        if (req.body.parentId) {
            let parentCategory = await FilterCategory.findById(req.body.parentId).lean().exec();

            let parentConditionArr = parentCategory.parentConditionArr;

            parentConditionArr.push({ id: parentCategory._id, level: parentCategory.level });
            let level = parentCategory.level + 1;
            let obj = {
                name: req.body.name,
                parentConditionArr,
                level,
                // categoryId: req.body.categoryId
            }


            const newCategory = await new FilterCategory(obj).save();

            const parentUpdate = await FilterCategory.findByIdAndUpdate(parentCategory._id, { $push: { subConditionArr: `${newCategory._id}` } }).exec();
            res.json({ message: 'Filter Created', success: true });


        }

        else {


            await new FilterCategory(req.body).save();
            res.json({ message: 'Filter Created', success: true });

        }
    }
    catch (err) {
        console.log(err);
        if (err.message)
            res.json({ message: err.message, success: false })
        else
            res.json({ message: 'Error', success: false })
    }
})

router.get('/', async (req, res) => {
    try {
        const filterCondtions = await FilterCategory.find().exec();
        res.json({ message: 'filter conditions', data: filterCondtions, success: true })
    }
    catch (err) {
        console.log(err)
        if (err.message)
            res.json({ message: err.message, success: false })
        else
            res.json({ message: 'Error', success: false })

    }
})
router.delete('/deleteById/:id', async (req, res) => {
    try {
        const category = await FilterCategory.findById(req.params.id).exec();

        if (!category) {
            throw new Error('category not found');
        }

        if (category.subCategoryArr) {

            if (category.subCategoryArr.length > 0)
                throw new Error('Has Sub categories Please delete them first')
        }

        if (category.parentCategory) {

            if (category.parentCategoryArr.length > 0) {
                for (let el of category.parentCategoryArr) {
                    const obj = await FilterCategory.findByIdAndUpdate(el, { $pull: { subCategoryArr: el } }).exec();
                }
            }
        }

        await FilterCategory.findByIdAndDelete(req.params.id).exec();

        res.json({ message: 'Category Deleted', success: true });


    }
    catch (err) {
        console.error(err);
        if (err.message)
            res.json({ message: err.message, data: err, success: false });
        else
            res.json({ message: 'Error', data: err, success: false });
    }
})



module.exports = router;
