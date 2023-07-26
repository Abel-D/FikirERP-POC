const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
  
    productId: { type: String},
    name: {type: String, max: 100},
<<<<<<< HEAD
    quantity: {type: Number},
    // price: {type: Number},
=======
    category: {type: Number},
    measurment: {type: Number},
    price:{type: Number}
>>>>>>> master
});

module.exports = mongoose.model('Product', ProductSchema);