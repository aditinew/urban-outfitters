var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');


const encryptPassword= async (password)=>{
    const hashPassword=await new Promise ((resolve,reject)=>{
        bcrypt.hash(password, 10, function (err, hash) {
            if (err) reject(err)
                  resolve(hash)
              });
    });
    return hashPassword
}


const generateJwt=async (id)=>{
    let expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    return jwt.sign({
        _id: id,
        exp: parseInt(expiry.getTime())
    }, "SECRET");
}


const comparePasswords = async (password, hash) => {
    const val = await bcrypt.compare(password, hash);
    return val;
}




module.exports={encryptPassword,generateJwt,comparePasswords};

