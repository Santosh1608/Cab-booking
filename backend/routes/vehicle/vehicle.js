const router = require('express').Router();
const Vehicle = require('../../models/Vehicle');
const User = require('../../models/User');
const Customer = require('../../models/Customer');
const auth = require('../../middlewares/auth');
router.post('/admin/add-vehicle', async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (user && user.email == 'admin@gmail.com') {
      const vehicle = new Vehicle({
        name: req.body.name,
        rate: req.body.rate,
      });
      const v = await vehicle.save();
      res.send({ msg: v });
    } else {
      return res.status(401).send({ error: 'User not authorized' });
    }
  } catch (e) {
    res.status(500).send({ error: 'server error' });
  }
});
router.put('/remove-vehicle/:customerId', async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.customerId);
    const v = await Vehicle.findOne({ name: customer.booked });
    if (v.count == 0) {
      return res.status(400).send({ error: 'Cannot remove more' });
    }
    v.count = v.count - 1;
    data = await v.save();
    res.send({ vehicle: data, customer });
  } catch (e) {
    res.status(500).send({ error: 'server error' });
  }
});
router.put('/add-vehicle/:customerId', async (req, res) => {
  console.log(req.params.customerId);
  try {
    const customer = await Customer.findById(req.params.customerId);
    console.log(customer);
    customer.alloted = false;
    await customer.save();
    const v = await Vehicle.findOne({ name: customer.booked });
    if (v.count == 10) {
      return res.status(400).send({ error: 'Cannot add more' });
    }
    v.count = v.count + 1;
    data = await v.save();
    res.send({ vehicle: data, customer });
  } catch (e) {
    res.status(500).send({ error: 'server error' });
  }
});

router.get('/admin/availability', auth, async (req, res) => {
  try {
    console.log('_________________--');
    const user = await User.findById(req.userId);
    console.log(user);
    if (user && user.email == 'admin@gmail.com') {
      const v = await Vehicle.find({});
      const customers = await Customer.find({});
      console.log(v);
      res.send({ vehicles: v, customers });
    } else {
      return res.status(401).send({ error: 'User not authorized' });
    }
  } catch (e) {
    res.status(500).send({ error: 'server error' });
  }
});
router.get('/show/mini', auth, async (req, res) => {
  try {
    const mini = await Vehicle.find({ name: 'mini' });
    res.send({ mini });
  } catch (e) {
    res.status(500).send({ error: 'server error' });
  }
});
router.get('/show/macro', auth, async (req, res) => {
  try {
    const macro = await Vehicle.find({ name: 'macro' });
    res.send({ macro });
  } catch (e) {
    res.status(500).send({ error: 'server error' });
  }
});

router.get('/show/auto', auth, async (req, res) => {
  try {
    const auto = await Vehicle.find({ name: 'auto' });
    res.send({ auto });
  } catch (e) {
    res.status(500).send({ error: 'server error' });
  }
});

module.exports = router;
