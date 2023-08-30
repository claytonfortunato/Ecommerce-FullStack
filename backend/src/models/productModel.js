const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  _id: {
    type: String,
  },
  name: {
    type: String,
  },
  slug: {
    type: String,
    lowercase: true,
  },
  productImage: {
    type: String,
  },
  brand: {
    type: String,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0,
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  numReviews: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;
