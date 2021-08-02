let mongoose=require('mongoose')

let admin = mongoose.Schema({
    name:String,
    email:String,
    password:String
})

module.exports = mongoose.model('Admin',admin);