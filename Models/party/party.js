var mongoose = require('mongoose')
var Schema = mongoose.Schema
var PartySchema = new Schema({
    id:Number,
    name:String,
    add_line1:String,
    add_line2:String,
    contact_no1:Number,
    contact_no2:Number,
    district:String,
    city:String,
    pin_code:Number,
    std_code:Number,
    state:String,
    country:String,
    Bank_Details:{
        bank_name:String,
        acc_name:String,
        acc_add:String,
        acc_city:String,
        pan_number:String,
        acc_no:Number,
        ifsc_code:String

    },
    registration_no:Number,
    email_id:String,
    buy_sell:String
})
module.exports = mongoose.model('party',PartySchema)