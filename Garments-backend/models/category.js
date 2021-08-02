let mongoose=require('mongoose');
const category=mongoose.Schema({
    parentCategoryArr:Array,
    name:String,
    categoryImage:String,
    subCategoryArr:Array,
    level:{
        type:Number,
        default:1
    }
})

module.exports=mongoose.model('Category',category)