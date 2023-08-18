const ProductModel = require("../models/productModel");
const products = require("../data/Products");

const getProduct = async (req, res) => {
  // const products = await ProductModel.find();
  // res.json(products);
  res.json(products);
};

module.exports = { getProduct };
