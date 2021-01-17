const mongoose = require('mongoose');
const validator = require('validator');
const CustomerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
    trim: true,
  },
  destination: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  booked: {
    type: String,
    ref: 'Vehicle',
  },
  alloted: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('Customer', CustomerSchema);
