const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let salesSchema = new Schema({
    salesId: {type: String},
    date : { type: date},
    productId: {type : String},
    quantity: { type: Number},
    price:{ type: Float},
    totalPrice: {type:Float}
})