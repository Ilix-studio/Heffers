const mongoose = require("mongoose");
//i will tell mongoose how my products will look like

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },
    countInStock: {
        type: Number,
        required: true
    },
    ImageURL: {
        type: String,
       
    },
});

const Product = mongoose.model("product", productSchema);
module.exports = Product;
