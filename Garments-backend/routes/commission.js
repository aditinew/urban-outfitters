let express = require('express');
let router = express.Router();

let Commission = require('../models/commission');



router.post('/', async (req, res) => {
  try {
    let val = req.body.commissionVal
    // const commissionArr = await Commission.find().exec();
    const commissionObj = await Commission.findOne().exec();
    if(commissionObj)
    {
      await Commission.findByIdAndUpdate(commissionObj._id,{value:val});
    }
    else
    {
      await new Commission({value:val}).save();
    }
    res.json({ message:`Commission set as ${val}`, success:true })
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
    const commissionObj = await Commission.findOne().exec();
    let resObj;
    if(commissionObj)
      resObj = commissionObj
    else
    {
      const newCommission = await new Commission({value:5}).save(); // set default commissio to 5%
      resObj = newCommission
    }
    res.json({ message:"Commission", data:resObj, success:true })
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
