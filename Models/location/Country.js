var mongoose = require('mongoose')
var schema = mongoose.Schema
var CountrySchema = new Schema({
    country_id:Number,
    country_name:String,
    country_label:String
})
module.exports = mongoose.model('country',CountrySchema)