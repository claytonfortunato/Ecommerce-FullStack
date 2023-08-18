const express = require("express");
const { getProduct } = require("../controllers/productControl");

const router = express.Router();

router.get("/product", getProduct);

module.exports = router;
