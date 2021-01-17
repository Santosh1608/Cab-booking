const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json({ extended: false }));
require('./db')();
const AuthRouter = require('./routes/auth/auth');
const VRouter = require('./routes/vehicle/vehicle');
const CustomerRouter = require('./routes/customer/customer');

const PORT = process.env.PORT || 8000;

app.use(AuthRouter);
app.use(VRouter);
app.use(CustomerRouter);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
