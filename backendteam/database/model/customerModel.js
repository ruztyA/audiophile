<<<<<<< HEAD
const mongoose = require("mongoose");
const { Schema } = mongoose;
=======
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
>>>>>>> 055aa2687db52f853d64080863ebe8ad048051fe

const customerSchema = new Schema({
  name: {
    type: String,
    required: true,
<<<<<<< HEAD
  },
=======
  },  
>>>>>>> 055aa2687db52f853d64080863ebe8ad048051fe
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
>>>>>>> 055aa2687db52f853d64080863ebe8ad048051fe
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
>>>>>>> 055aa2687db52f853d64080863ebe8ad048051fe
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
=======
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
>>>>>>> 055aa2687db52f853d64080863ebe8ad048051fe
