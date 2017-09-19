var mongoose = require('mongoose')
var Schema = mongoose.Schema
var TransportCompleted = new Scheman({
    order_id:Number,
    transport_id:Number,
    from:String,
    destination:String,
    freight_value:Float64Array,
    freight_amount:Float64Array,
    vehicle_number:Number,
    notes:String
})
module.exports = mongoose.model('transport', TransportCompleted)
