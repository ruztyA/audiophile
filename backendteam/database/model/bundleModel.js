const mongoose = require('mongoose');
<<<<<<< HEAD
const { Schema } = mongoose;
=======
const Schema = mongoose.Schema;
>>>>>>> 055aa2687db52f853d64080863ebe8ad048051fe

const bundleSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
<<<<<<< HEAD
  }
});

const Bundle = mongoose.model("Bundle", bundleSchema);
module.exports = Bundle;
=======
  },
})

const Bundle = mongoose.model("Bundle", bundleSchema);

module.exports = Bundle;


>>>>>>> 055aa2687db52f853d64080863ebe8ad048051fe
