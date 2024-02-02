const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema ({
        productImage :{type:String,required:true},
        productName : {type:String,required:true},
        productPrice : {type:Number,required:true},
        productType : {type:String,required:true},
        productHigh : {type:[String],required:true},
        description : {type:String,required:true}
})

module.exports = mongoose.model('Product',productSchema);
