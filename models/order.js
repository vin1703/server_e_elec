const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    productId : {type:String,required:true},
    name : {type :String,required:true},
    number : {type:Number,required:true},
    street : {type :String,required:true},
    city : {type :String,required:true},
    district : {type :String,required:true},
    country : {type :String,required:true},
    userId : {type : String,required:true}
})

module.exports = mongoose.model('Order',orderSchema);