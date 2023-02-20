const bcrypt = require('bcrypt');

const comparePassword = async function (plainPassword, hash) {
  const result = await bcrypt.compare(plainPassword, hash);
  return result;
};
module.exports = comparePassword;
