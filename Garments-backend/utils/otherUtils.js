var randomstring = require("randomstring");


const generateRandomString=(len)=>{
    return randomstring.generate(len);
}


module.exports={generateRandomString}