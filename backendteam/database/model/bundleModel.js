const mongoose = require('mongoose');
<<<<<<< HEAD
const Schema = mongoose.Schema;
=======
const { Schema } = mongoose;
>>>>>>> 3c3750a97cfbd6f332b2623a8cc43b1ff4940c7a

const bundleSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
<<<<<<< HEAD
  },
})

const Bundle = mongoose.model("Bundle", bundleSchema);

module.exports = Bundle;


=======
  }
});

const Bundle = mongoose.model("Bundle", bundleSchema);
module.exports = Bundle;
>>>>>>> 3c3750a97cfbd6f332b2623a8cc43b1ff4940c7a
