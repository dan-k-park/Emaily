module.exports = (req, res, next) => {
  // next passes the request off to the next middleware in the chain
  if (req.user.credits < 1) {
    return res.status(403).send({ error: 'You don\'t have enough credits!' })
  }

  next();
}