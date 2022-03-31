const express = require("express");
const connectDB = require("./config/db");
const app = express();
const PORT = process.env.PORT || 4000;



app.get("/", (req,res) => res.status(200).send("Server Connnected"));

app.use(express.json({ extended : false}))

app.use("/api/products", require('./routes/productRoutes'))


app.listen(PORT, () => console.log(`listening to http://localhost:${4000}`));

//mongoDB connected
connectDB();