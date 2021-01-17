const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    validate(email) {
      if (!validator.isEmail(email)) {
        throw new Error('Invalid email');
      }
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
});

UserSchema.methods.getToken = async function () {
  console.log('getting token');
  const user = this;
  const token = jwt.sign(
    {
      _id: user._id.toString(),
    },
    'san1234'
  );
  return {
    token,
    user: { _id: user._id.toString(), name: user.name, email: user.email },
  };
};

module.exports = mongoose.model('User', UserSchema);
