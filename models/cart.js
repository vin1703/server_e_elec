const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartSchema = new Schema({
    productId : {type:String,required:true},
    productImage : {type :String,required:true},
    productName : {type:String,required:true},
    productPrice : {type :Number,required:true},
    userId : {type : String,required:true}
})

module.exports = mongoose.model('Cart',cartSchema);