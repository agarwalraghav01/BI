var mongoose = require('mongoose')
var Schema = mongoose.Schema
var StateSchema = new Schema({
    name:String,
    country_id:Number,
    state_id:Number
})
module.exports = mongoose.model('state',StateSchema)
