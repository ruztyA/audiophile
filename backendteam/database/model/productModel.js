const mongoose = require('mongoose');
<<<<<<< HEAD
const Schema = mongoose.Schema;
=======
const { Schema } = mongoose;
>>>>>>> 3c3750a97cfbd6f332b2623a8cc43b1ff4940c7a

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
    type: Boolean,
=======
    type: String,
>>>>>>> 3c3750a97cfbd6f332b2623a8cc43b1ff4940c7a
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
  bundle_id: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bundle",
    required: true,
  }],
=======
  bundle_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bundle",
    required: true,
  },
>>>>>>> 3c3750a97cfbd6f332b2623a8cc43b1ff4940c7a
  feature_image: {
    type: Array,
    required: true,
  }
});

const Product = mongoose.model("Product", productSchema);
<<<<<<< HEAD


=======
>>>>>>> 3c3750a97cfbd6f332b2623a8cc43b1ff4940c7a
module.exports = Product;