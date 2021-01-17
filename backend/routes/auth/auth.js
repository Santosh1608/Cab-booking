const router = require('express').Router();
const User = require('../../models/User');
const bcrypt = require('bcrypt');
router.post('/signup', async (req, res) => {
  let { name, email, password } = req.body;
  password = await bcrypt.hash(password, 8);
  const user = new User({ name, email, password });
  try {
    await user.save();
    const token = await user.getToken();
    res.send(token);
  } catch (e) {
    console.log('error', e);
    res.status(500).send({ error: 'server error' });
  }
});

router.post('/login', async (req, res) => {
  let { email, password } = req.body;
  console.log(req.body);
  //Check if user exists
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      //check if same passwords match
      const match = await bcrypt.compare(password, user.password);
      console.log(match);
      if (match) {
        const token = await user.getToken();
        return res.send(token);
      } else {
        console.log('invalid');
        return res.status(400).send({ error: 'Invalid credentials' });
      }
    } else {
      return res.status(400).send({ error: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).send({ error: 'server error' });
  }
});

module.exports = router;
