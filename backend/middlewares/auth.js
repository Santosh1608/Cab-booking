const jwt = require('jsonwebtoken');
const auth = (req, res, next) => {
  //get token from header
  const token = req.header('token');
  //check if no token
  if (!token) {
    return res.status(401).send({ error: 'No token,authorized denied' });
  }
  //Verify token
  try {
    const decoded = jwt.verify(token, 'san1234');
    req.userId = decoded._id;
    next();
  } catch (e) {
    res.status(401).send({ error: 'Token is not valid' });
  }
};

module.exports = auth;
