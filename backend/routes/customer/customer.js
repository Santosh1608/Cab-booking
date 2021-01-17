const router = require('express').Router();
const Vehicle = require('../../models/Vehicle');
const User = require('../../models/User');
const Customer = require('../../models/Customer');
const auth = require('../../middlewares/auth');
router.post('/add_customer/:type', auth, async (req, res) => {
  try {
    console.log(req.params.type);
    const customer = new Customer({
      ...req.body,
      booked: req.params.type,
      alloted: true,
    });
    await customer.save();
    console.log(customer);
    res.send({ customer });
  } catch (e) {
    res.status(500).send({ error: 'Server error' });
  }
});
module.exports = router;
