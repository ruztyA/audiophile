const mongoose = require('mongoose');

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  background: {
    type: String,
    required: true,
  }
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;