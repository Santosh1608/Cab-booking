const mongoose = require('mongoose');
async function connection() {
  try {
    await mongoose.connect(
      'mongodb+srv://santech:san1234@cluster0.1lqv0.mongodb.net/Cab-booking?retryWrites=true&w=majority',
      { useUnifiedTopology: true, useNewUrlParser: true }
    );
    console.log('mongodb connected');
  } catch (e) {
    console.error('db connection failed');
    process.exit(-1);
  }
}

module.exports = connection;
