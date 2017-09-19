var mongoose = require('mongoose')
var Schema = mongoose.Schema
var CitySchema = new Schema({
    id:Number,
    name:String,
    state_id:Number,
    country_id:Number,
    pin_code:Number,
    std_code:Number
})
module.exports= mongoose.model('city', CitySchema)
