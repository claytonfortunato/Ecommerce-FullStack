const ProductModel = require("../models/productModel");

const getProduct = async (req, res) => {
  const products = await ProductModel.find();
  res.json(products);
};

module.exports = { getProduct };
