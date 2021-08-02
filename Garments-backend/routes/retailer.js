let express = require('express');
let router = express.Router();
const Retailer = require('../models/retailer');
const Product = require('../models/product');


let {upload} = require('../utils/aws');

let { encryptPassword, generateJwt, comparePasswords } = require('../utils/jwtUtils')
let {nodemail}=require('../utils/mailer');
let {generateRandomString}=require('../utils/otherUtils');

router.post('/register', async (req, res) => {
    try {

        const retailerEmailChk = await Retailer.findOne({email:req.body.email}).exec();
        if(retailerEmailChk)
            throw new Error('Email already registered');

        req.body.password = await encryptPassword(req.body.password);

        const obj = await new Retailer(req.body).save();
        await nodemail('contact@jiorooms.com', req.body.email, "Registration Successful", "You have been registered successfully")
        res.json({ message: 'You have been registered successfully', data:obj._id, success: true });

    }
    catch (err) {
        console.error(err);
        if(err.message)
            res.json({ message: err.message, data:err, success: false });
        else
            res.json({ message: 'Error', data:err, success: false });
    }
})

router.post('/login', async (req, res) => {
    try {

        const retailer = await Retailer.findOne({ email: req.body.email }).exec();
        if (!retailer) 
            throw new Error("You are not registered");
        
        const checkPassword = await comparePasswords(req.body.password, retailer.password);

        if (!checkPassword) 
            throw new Error("Check Your Credentials");

        const token = await generateJwt(retailer._id);
        res.json({ message: 'Logged In', data: token, success: true });

    }
    catch (err) {
        console.error(err);
        if(err.message)
            res.json({ message: err.message, data:err, success: false });
        else
            res.json({ message: 'Error', data:err, success: false });
    }
})
router.post('/forgotPassword',async (req,res)=>{
    try{
       const retailer = await Retailer.findOne({ email: { "$regex": `^${req.body.email}$`, "$options": 1 } }).exec();
       if (!retailer) 
           throw new Error("You are not registered");
       let forgotToken=generateRandomString(5);
       const retailerUpdate=await Retailer.findByIdAndUpdate(retailer._id,forgotToken).exec();
       
       await nodemail('contact@jiorooms.com', req.body.email, "Forgot Password", `Your Otp is ${forgotToken}.Please don't share this Otp.`)
       res.json({ message: 'Please check your mail', success: true });
    }
   catch(err){
        console.log(err);
        if(err.message)
            res.json({message:err.message,success:false})
        else 
            res.json({message:'Error',success:false}) 
    }
});

router.post('/verifyToken',async (req,res)=>{
    try{
       const retailer = await Retailer.findOne({ email: { "$regex": `^${req.body.email}$`, "$options": 1 } ,forgotToken:req.body.forgotToken}).exec();
       if (!retailer) 
           throw new Error("Invalid Input");
           req.body.password=await encryptPassword(req.body.password);
           const retailerUpdate=await Retailer.findByIdAndUpdate(retailer._id,{password:req.body.password,forgotToken:''}).exec();
       
           await nodemail('contact@jiorooms.com', req.body.email, "Password Updated Successfully", `Your password have been updated successfully`)
           res.json({ message: 'Password Updated Successfully', success: true });
    }
   catch(err){
        console.log(err);
        if(err.message)
            res.json({message:err.message,success:false})
        else 
            res.json({message:'Error',success:false}) 
    }
})


router.patch('/addToCart/:id',async (req,res)=>{
     try{
        const user=await Retailer.findById(req.params.id).lean().exec();
        const productObj=await Product.findById(req.body.productId).exec();
        if(!user){
            throw new Error('login first')
        }

        if(user.cart){
            if(user.cart.some(el=>el.productId==req.body.productId)){
               let index= user.cart.findIndex(el=>el.productId==req.body.productId)
               user.cart[index].quantity+=req.body.quantity 
            }
            else{
                let quantity=req.body.quantity;
                if(quantity<productObj.minQuantity){
                    quantity=productObj.minQuantity
                }
                let obj={productId:req.body.productId,quantity}
                user.cart.push(obj)
            }
        }
        else{
            user.cart=[];
            let quantity=req.body.quantity;
                if(quantity<productObj.minQuantity){
                    quantity=productObj.minQuantity
                }
            let obj={productId:req.body.productId,quantity}
            user.cart.push(obj)
        }
        await Retailer.findByIdAndUpdate(user._id,{cart:user.cart}).exec();
        res.json({ message: 'Item Added to cart',success: true });
    }
    catch(err){
         console.log(err);
         if(err.message)
             res.json({message:err.message,success:false})
         else 
             res.json({message:'Error',success:false}) 
     }
});


router.patch('/updateRetailer/:id',async (req,res)=>{
     try{
        await Retailer.findByIdAndUpdate(req.params.id,req.body).exec();
        res.json({ message: 'updated',success: true });
    }
    catch(err){
         console.log(err);
         if(err.message)
             res.json({message:err.message,success:false})
         else 
             res.json({message:'Error',success:false}) 
     }
});


router.get('/getById/:id',async (req,res)=>{
     try{
         const user=await Retailer.findById(req.params.id).exec();
         res.json({ message: 'user', data:user,success: true });
     }
    catch(err){
         console.log(err);
         if(err.message)
             res.json({message:err.message,success:false})
         else 
             res.json({message:'Error',success:false}) 
     }
})
router.patch('/uploadDocs/:id',upload.single('file'),async (req,res)=>{
     try{
        await Retailer.findByIdAndUpdate(req.params.id,{docs:res.req.file.location, docName:req.body.docName, docVerificationFlag:1}).exec();
        res.json({message: 'Document Uploaded, Please wait the adminns will verify it shortly', success: true});
    }
    catch(err){
         console.log(err);
         if(err.message)
             res.json({message:err.message,success:false})
         else 
             res.json({message:'Error',success:false}) 
     }
})

router.patch('/verifyOrRejectDocument/:id', async (req, res) => {
  try {
    const retailer = await Retailer.findByIdAndUpdate(req.params.id,{ docVerificationFlag:req.body.docVerificationFlag, docMessage:req.body.docMessage }).exec()
    if(!retailer)
      throw new Error('Retailer Not Found Try Again')
    res.json({ message:"Verification Updated", success:true });
  }
  catch (err) {
    console.log(err);
    if (err.message)
      res.json({message: err.message, success: false})
    else
      res.json({message: 'Error', success: false})
  }
});



router.get('/getVerifyDocs', async (req, res) => {
  try {
    const arr = await Retailer.find({docVerificationFlag:1}).exec();
    res.json({ message:"need verification", data:arr, success:true })
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
