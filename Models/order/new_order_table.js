var mongoose = require('mongoose')
var Schema = mongoose.Schema
var OrderSchema = new Schema({
    order_id:Number,
    status:String,
    buyer_id:String,
    buyer_name:String,
    seller_id:String,
    seller_name:String,
    quantity_unit:Number,
    quantity:Number,
    weight_per_bag:Number,
    rate_per_bag:Float64Array,
    order_date:Date,
    order_notes:String,
    order_notes_private:String,
    edit_date:String
})
module.exports = mongoose.model('order', OrderSchema)