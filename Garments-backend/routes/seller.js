let express = require('express');
let router = express.Router();
const Seller = require('../models/seller');

let {upload} = require('../utils/aws');

let {encryptPassword, generateJwt, comparePasswords} = require('../utils/jwtUtils')
let {nodemail} = require('../utils/mailer');
let {generateRandomString} = require('../utils/otherUtils');
router.post('/register', async (req, res) => {
    try {

        const sellerEmailChk = await Seller.findOne({email: {"$regex": `^${req.body.email}$`, "$options": 1}}).exec();
        if (sellerEmailChk)
            throw new Error('Email already registered');

        req.body.password = await encryptPassword(req.body.password);

        const seller=await new Seller(req.body).save();
        await nodemail('contact@jiorooms.com', req.body.email, "Registration Successfull", "You have been registered successfully")
        res.json({message: 'You have been registered as a seller successfully', data:seller._id,success: true});

    }
    catch (err) {
        console.error(err);
        if (err.message)
            res.json({message: err.message, data: err, success: false});
        else
            res.json({message: 'Error', data: err, success: false});
    }
});

router.patch('/uploadDocs/:id',upload.single('file'),async (req,res)=>{
     try{
        await Seller.findByIdAndUpdate(req.params.id,{docs:res.req.file.location, docName:req.body.docName, docVerificationFlag:1}).exec();
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
    const seller = await ketailer.findByIdAndUpdate(req.params.id,{ docVerificationFlag:req.body.docVerificationFlag, docMessage:req.body.docMessage }).exec()
    if(!seller)
      throw new Error('Seller Not Found Try Again')
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
    const arr = await Seller.find({docVerificationFlag:1}).exec();
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

router.post('/login', async (req, res) => {
    try {

        const seller = await Seller.findOne({email: {"$regex": `^${req.body.email}$`, "$options": 1}}).exec();
        if (!seller)
            throw new Error("You are not registered");

        const checkPassword = await comparePasswords(req.body.password, seller.password);

        if (!checkPassword)
            throw new Error("Check Your Credentials");

        const token = await generateJwt(seller._id);
        res.json({message: 'Logged In', data: token, success: true});

    }
    catch (err) {
        console.error(err);
        if (err.message)
            res.json({message: err.message, data: err, success: false});
        else
            res.json({message: 'Error', data: err, success: false});
    }
});


router.post('/forgotPassword', async (req, res) => {
    try {
        const seller = await Seller.findOne({email: {"$regex": `^${req.body.email}$`, "$options": 1}}).exec();
        if (!seller)
            throw new Error("You are not registered");
        let forgotToken = generateRandomString(5);
        const sellerUpdate = await Seller.findByIdAndUpdate(seller._id, forgotToken).exec();

        await nodemail('contact@jiorooms.com', req.body.email, "Forgot Password", `Your Otp is ${forgotToken}.Please don't share this Otp.`)
        res.json({message: 'Please check your mail', success: true});
    }
    catch (err) {
        console.log(err);
        if (err.message)
            res.json({message: err.message, success: false})
        else
            res.json({message: 'Error', success: false})
    }
});

router.post('/verifyToken', async (req, res) => {
    try {
        const seller = await Seller.findOne({email: {"$regex": `^${req.body.email}$`, "$options": 1}, forgotToken: req.body.forgotToken}).exec();
        if (!seller)
            throw new Error("Invalid Input");
        req.body.password = await encryptPassword(req.body.password);
        const sellerUpdate = await Seller.findByIdAndUpdate(seller._id, {password: req.body.password, forgotToken: ''}).exec();

        await nodemail('contact@jiorooms.com', req.body.email, "Password Updated Successfully", `Your password have been updated successfully`)
        res.json({message: 'Password Updated Successfully', success: true});
    }
    catch (err) {
        console.log(err);
        if (err.message)
            res.json({message: err.message, success: false})
        else
            res.json({message: 'Error', success: false})
    }
})



router.patch('/verifyOrRejectDocument/:id', async (req, res) => {
  try {
    const seller = await Seller.findByIdAndUpdate(req.params.id,{ docVerificationFlag:req.body.docVerificationFlag, docMessage:req.body.docMessage }).exec()
    if(!seller)
      throw new Error('Seller Not Found Try Again')
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
    const arr = await Seller.find({docVerificationFlag:1}).exec();
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



router.get('/getById/:id', async (req, res) => {
  try {
    let sellerObj = await Seller.findById(req.params.id).exec();

    if(!sellerObj)
      throw new Error('Seller Not Found');

    res.json({ message:"Seller by id", data:sellerObj, success:true });
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
