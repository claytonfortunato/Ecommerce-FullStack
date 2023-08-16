const express = require("express");
const { getProduct } = require("../controllers/productControl");

const router = express.Router();

router.get("/", getProduct);

module.exports = router;
