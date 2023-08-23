require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectToDB = require("./config/db");

const app = express();
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
  })
);

//All Routes
app.use("/", require("./routes/productRouter"));

const port = 8000;
app.listen(port, () => {
  console.log(`Listening on port : ${port}`);
  connectToDB();
});
