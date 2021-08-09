<<<<<<< HEAD
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
=======
const mongoose = require("mongoose");
const { Schema } = mongoose;
>>>>>>> 3c3750a97cfbd6f332b2623a8cc43b1ff4940c7a

const customerSchema = new Schema({
  name: {
    type: String,
    required: true,
<<<<<<< HEAD
  },  
=======
  },
>>>>>>> 3c3750a97cfbd6f332b2623a8cc43b1ff4940c7a
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
<<<<<<< HEAD
  },  
=======
  },
>>>>>>> 3c3750a97cfbd6f332b2623a8cc43b1ff4940c7a
  address: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
<<<<<<< HEAD
  },  
=======
  },
>>>>>>> 3c3750a97cfbd6f332b2623a8cc43b1ff4940c7a
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  paymentType: {
    type: String,
<<<<<<< HEAD
    enum: ['e-money', 'cash-on-delivery'],
    required: true,
  },  
  emoneyNumber: {
    type: String,
    required: true,
  },
  emoneyPin: {
    type: String,
    required: true,
  }
});

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
=======
    enum: ["e-money", "cash-on-delivery"],
    default: "cash-on-delivery",
    required: true,
  },
  emoneyNumber: {
    type: String,
  },
  emoneyPin: {
    type: String,
  },
});

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
>>>>>>> 3c3750a97cfbd6f332b2623a8cc43b1ff4940c7a
