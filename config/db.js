require('dotenv').config();
const mongoose = require("mongoose");
const productSchema = require('./../models/Product')


const connectDB = async () => {
    try {
      //mongoose connect to mongoDB by passing parameter i.e db.
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        
      });
      console.log("MongoDB Connected ..");
      const product = {
        name: "Technology",
        description: "Power of Modern World",
        price: 233,
        countInStock: 3,
       imageUrl: "https://firebasestorage.googleapis.com/v0/b/fir-99582.appspot.com/o/Y.png?alt=media&token=42f83229-45c1-48bf-9f4f-b531e05fa04b",


      }
      await new productSchema(product).save();

    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };
  module.exports = connectDB;