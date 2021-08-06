const mongoose = require('mongoose');

const checkoutSchema = new Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true,
  },  
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  }
});

const Checkout = mongoose.model("Checkout", checkoutSchema);
module.exports = Checkout;