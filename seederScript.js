

const productsData = require('./data/products'); 
const connectDB = require("./config/db");
const Product = require("./models/Product");



connectDB();

const importData = async () => {
    try {
       await Product.deleteMany({});
       
       await Product.insertMany(productsData);

       console.log("Data Imported");

       process.exit();

    } catch (error) {
        console.error("SomeThing is wrong");
        process.exit(1);
    }
};
importData();