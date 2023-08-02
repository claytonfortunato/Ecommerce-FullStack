require("dotenv").config();
const express = require("express");

const connectToDB = require("./config/db");
const app = express();

const port = 8000;
app.listen(port, () => {
  console.log(`Listening on port : ${port}`);
  connectToDB();
});
