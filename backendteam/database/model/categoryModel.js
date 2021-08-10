<<<<<<< HEAD
const mongoose = require('mongoose');
const { Schema } = mongoose;
=======
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
>>>>>>> 055aa2687db52f853d64080863ebe8ad048051fe

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
<<<<<<< HEAD
  }
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
=======
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
>>>>>>> 055aa2687db52f853d64080863ebe8ad048051fe
