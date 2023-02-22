const bcrypt = require('bcrypt');

const saltRound = 10;

const passwordHashing = async function (plainPassword) {
  const hashed = await bcrypt.hash(plainPassword, saltRound);
  return hashed;
};
module.exports = passwordHashing;
