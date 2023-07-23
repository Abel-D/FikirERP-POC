const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
  
    productId: { type: String},
    name: {type: String, max: 100},
    quantity: {type: Number},
    // price: {type: Number},
});

module.exports = mongoose.model('Product', ProductSchema);