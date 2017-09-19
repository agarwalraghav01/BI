var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ProductSchema = new Schema({
    id:Number,
    name:String
})
module.exports = mongoose.model('product', ProductSchema)