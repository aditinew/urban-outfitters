let express = require('express');
let router = express.Router();

let Product = require('../models/product');
let Category = require('../models/category');

let randomstring = require('randomstring');

let {encryptPassword, generateJwt, comparePasswords} = require('../utils/jwtUtils')
let {upload} = require('../utils/aws');

let ProductSpecifications = require('../models/productSpecification');
let Seller = require('../models/seller');
let Brand = require('../models/Brand');
/////////////////////////////////////////////////create products
router.post('/', async (req, res) => {
    try {

        let existsChk = true
        let productCode = 'GIM' + (randomstring.generate(5)).toUpperCase();

        while (existsChk) {
            let pcexist = await Product.findOne({productCode}).exec();
            if (!pcexist)
                existsChk = false;
            else
                productCode = 'GIM' + (randomstring.generate(5)).toUpperCase();
        }

        req.body.productCode = productCode;

        const pro = await new Product(req.body).save();


        res.json({message: "product created sucessfully", data: pro._id, success: true})

    } catch (err) {
        if (err.message)
            res.json({message: err.message, success: false})
        else
            res.json({message: 'Error', success: false})
    }
})



router.patch('/updateImage/:id', upload.single('file'), async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).exec();
        if (product.thumbnailImage) {
            await Product.findByIdAndUpdate(req.params.id, {$push: {imageArray: res.req.file.location}}).exec()

        }
        else {

            await Product.findByIdAndUpdate(req.params.id, {thumbnailImage: res.req.file.location, $push: {imageArray: res.req.file.location}}).exec()
        }
        res.json({message: "product image added sucessfully", success: true})

    } catch (err) {
        if (err.message)
            res.json({message: err.message, success: false})
        else
            res.json({message: 'Error', success: false})
    }
})


router.post('/addProducts', upload.single('file'), async (req, res) => {
    try {
        const productcheck = await Product.findOne({name: req.body.name}).exec()
        if (productcheck)
            throw new Error('Same product already exists');

        let thumbnailImage = res.req.file.location;
        let imageArray = [res.req.file.location];
        const newproduct = await new Product(req.body).save();
        if (newproduct) {
            const updateProductImage = await Product.findByIdAndUpdate(newproduct._id, {thumbnailImage, imageArray}).exec()
            res.json({message: 'Product added Sucessfully', success: true})
        }
        else
            throw new Error('Something went wrong while adding product')
    }
    catch (err) {
        if (err.message)
            res.json({message: err.message, success: false})
        else
            res.json({message: 'Error', success: false})

    }
})


/////////////////////////////////////////////////get all products
router.get('/getAllProducts', async (req, res) => {
    try {
        const productGet = await Product.find().exec()
        if (productGet)
            res.json({message: "Get Operation on all products sucessful", data: productGet, success: true})
    } catch (err) {
        if (err.message)
            res.json({message: err.message, success: false})
        else
            res.json({message: 'Error', success: false})
    }
})

router.get('/getProductsBySeller/:id', async (req, res) => {
    try {
        const productGet = await Product.find({sellerId: req.params.id}).exec()
        if (productGet)
            res.json({message: "Get Operation on all products sucessful", data: productGet, success: true})
    } catch (err) {
        if (err.message)
            res.json({message: err.message, success: false})
        else
            res.json({message: 'Error', success: false})
    }
})


router.get('/getProductsByCategory/:id', async (req, res) => {
    try {
        const productGet = await Product.find({categoryIdArr: req.params.id}).exec() // mongodb reference link : https://docs.mongodb.com/manual/tutorial/query-arrays/
        if (productGet)
            res.json({message: "Get Operation on all products sucessful", data: productGet, success: true})
    } catch (err) {
        if (err.message)
            res.json({message: err.message, success: false})
        else
            res.json({message: 'Error', success: false})
    }
})



/////////////////////////////////////////////update products
router.patch('/updateProduct/:id', async (req, res) => {
    try {
        const productUpdateVar = await Product.findByIdAndUpdate(req.params.id, req.body).exec();

        res.json({message: 'product Updated sucessfully', success: true})
    } catch (err) {
        if (err.message)
            res.json({message: err.message, success: false})
        else
            res.json({message: 'Error', success: false})

    }
})



/////////////////////////////////delete products 
router.delete('/deleteProduct/:id', async (req, res) => {
    try {
        const productDeleteVar = await Product.findById({_id: req.params.id})
        if (productDeleteVar)
            await productDeleteVar.remove()
        res.json({message: "product deleted sucessfully", success: true})

    } catch (err) {
        if (err.message)
            res.json({message: err.message, success: false})
        else
            res.json({message: 'Error', success: false})
    }
})

router.get('/getById/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).lean().exec();
        const productSpec = await ProductSpecifications.findOne({categoryId: product.categoryId}).exec();

        const seller = await Seller.findById(product.sellerId).exec();
        product.businessName = seller.businessName

        const brand = await Brand.findById(product.brandId).exec();
        if (brand)
            product.brandObj = brand;

        let finalArr = []
        for (let el of product.productSpecificationArr) {
            let tempObj = productSpec.specifications.find(ele => ele.id == el._id);
            let tempArr = []
            for (let element of el.contentArr) {
                let tempContent = tempObj.contentArr.find(chk => chk.id == element.id)
                tempArr.push(tempContent)
            }
            let obj = {
                name: tempObj.name,
                id: tempObj.id,
                contentArr: tempArr
            }
            finalArr.push(obj)
        }
        product.productSpecificationArr = finalArr;
        console.log(product)
        res.json({message: 'Product Data', data: product, success: true});
    }
    catch (err) {
        console.log(err);
        if (err.message)
            res.json({message: err.message, success: false})
        else
            res.json({message: 'Error', success: false})
    }
})


router.get('/search/:searchTerm', async (req, res) => {
    try {
        const productGet = await Product.find({name: {$regex: req.params.searchTerm, $options: 'i'}}).exec()
        if (productGet)
            res.json({message: "Get Operation on searched products sucessful", data: productGet, success: true})
    }
    catch (err) {
        console.log(err);
        if (err.message)
            res.json({message: err.message, success: false})
        else
            res.json({message: 'Error', success: false})
    }
});




router.patch('/addToStock/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).exec()
        if (!product)
            throw new Error('Product not found')

        console.log(!isNaN(product.stock), product.stock)
        if (!isNaN(product.stock)) // if it is a number
            await Product.findByIdAndUpdate(req.params.id, {stock: parseInt(req.body.stock) + parseInt(product.stock)}).exec()
        else
            await Product.findByIdAndUpdate(req.params.id, {stock: req.body.stock}).exec();

        res.json({message: 'stock updated', success: true})
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
