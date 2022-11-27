const mongoose = require("mongoose");
const { Schema } = mongoose;

const product = new Schema({
    id:String,
    productName: String,
    price: Number,

})

const ProductModel = mongoose.model('products', product)
exports.ProductModel = ProductModel