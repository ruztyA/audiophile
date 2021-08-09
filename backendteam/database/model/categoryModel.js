<<<<<<< HEAD
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
=======
const mongoose = require('mongoose');
const { Schema } = mongoose;
>>>>>>> 3c3750a97cfbd6f332b2623a8cc43b1ff4940c7a

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
<<<<<<< HEAD
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
=======
  }
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
>>>>>>> 3c3750a97cfbd6f332b2623a8cc43b1ff4940c7a
