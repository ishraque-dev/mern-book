const jwt = require('jsonwebtoken');

exports.generateJWT = function (user) {
  return jwt.sign(
    {
      user,
    },
    process.env.TOKEN_SECRET_Key,
    {
      expiresIn: '7d',
    }
  );
};
