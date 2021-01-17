const mongoose = require('mongoose');
const VehicleSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  count: {
    type: Number,
    default: 10,
  },
});

module.exports = mongoose.model('Vehicle', VehicleSchema);
