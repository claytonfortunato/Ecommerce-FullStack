require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectToDB = require("./config/db");

const products = require("./data/Products");

const app = express();
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

//All Routes
app.use("/api/", require("./routes/productRouter"));
app.get("/api/products", (req, res) => {
  res.json(products);
});

const port = 8000;
app.listen(port, () => {
  console.log(`Listening on port : ${port}`);
  connectToDB();
});
