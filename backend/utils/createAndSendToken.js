const jwt = require('jsonwebtoken');

exports.createAndSendToken = async function (user, statusCode, res) {
  const id = user._id;
  const token = jwt.sign({ id }, process.env.TOKEN_SECRET_Key, {
    expiresIn: '7d',
  });
  const cookieOptions = {
    expiresIn: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === 'production') {
    cookieOptions.secure = true;
  }
  res.cookie('jwt', token, cookieOptions);
  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};
// return jwt.sign(
//   {
//     user,
//   },
//   process.env.TOKEN_SECRET_Key,
//   {
//     expiresIn: '7d',
//   }
// );
