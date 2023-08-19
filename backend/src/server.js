require("dotenv").config();
const express = require("express");
const cors = require("cors");
const productRouter = require("./routes/productRouter");
const seedRouter = require("./routes/seedRouter");

const connectToDB = require("./config/db");

const app = express();
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
  })
);

//All Routes
app.use("/api/products", productRouter);
app.use("/api/seed", seedRouter);

const port = 8000;
app.listen(port, () => {
  console.log(`Listening on port : ${port}`);
  connectToDB();
});
