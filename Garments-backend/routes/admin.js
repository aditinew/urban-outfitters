let express = require('express');
const admin = require('../models/admin');
let router = express.Router();

let Admin = require('../models/admin');

let { encryptPassword, generateJwt, comparePasswords } = require('../utils/jwtUtils')

router.post('/register', async (req, res) => {
    try {

        const adminEmailChk = await Admin.findOne({email:req.body.email}).exec();
        if(adminEmailChk)
            throw new Error('Email already registered');

        req.body.password = await encryptPassword(req.body.password);

        await new Admin(req.body).save();

        res.json({ message: 'Admin Registered', success: true });

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

        const admin = await Admin.findOne({ email: req.body.email }).exec();
        if (!admin) 
            throw new Error("You are not registered");
        
        const checkPassword = await comparePasswords(req.body.password, admin.password);

        if (!checkPassword) 
            throw new Error("Check Your Credentials");

        const token = await generateJwt(admin._id);
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

module.exports = router;