const mongoose = require('mongoose');
<<<<<<< HEAD
const { Schema } = mongoose;
=======
const Schema = mongoose.Schema;
>>>>>>> 055aa2687db52f853d64080863ebe8ad048051fe

const productSchema = new Schema({
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  flag_new: {
<<<<<<< HEAD
    type: String,
=======
    type: Boolean,
>>>>>>> 055aa2687db52f853d64080863ebe8ad048051fe
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
<<<<<<< HEAD
  bundle_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bundle",
    required: true,
  },
=======
  bundle_id: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bundle",
    required: true,
  }],
>>>>>>> 055aa2687db52f853d64080863ebe8ad048051fe
  feature_image: {
    type: Array,
    required: true,
  }
});

const Product = mongoose.model("Product", productSchema);
<<<<<<< HEAD
=======


>>>>>>> 055aa2687db52f853d64080863ebe8ad048051fe
module.exports = Product;