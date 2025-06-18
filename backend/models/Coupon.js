const mongoose = require('mongoose');

const CouponSchema = new mongoose.Schema({
  name: String,
  from: {
    type: Date,
    default: Date.now
  },
  to: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Coupon', CouponSchema);
