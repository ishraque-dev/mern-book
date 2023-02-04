const User = require('../models/User');
const passwordHashing = require('../functions/hashPassword');
const generateUsername = require('../functions/generateUsername');

exports.usernameValidation = function (req, res, next) {
  if (req.body.firstName.length > 15 || req.body.firstName.length < 3) {
    return res.status(400).json({
      status: 'Bad Request',
      massage:
        'Username must be at least 3 characters long and less then 16 characters ',
    });
  }
  next();
};
exports.emailValidation = async function (req, res, next) {
  const regex = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/.test(req.body.email);
  if (!regex) {
    return res.status(404).json({
      status: 'Bad Request',
      message: 'Invalid email address',
    });
  }

  const existOne = await User.findOne({ email: req.body.email });
  if (existOne && existOne.email === req.body.email) {
    return res.status(400).json({
      status: 'Bad Request',
      message: 'Email already in exist',
    });
  }
  next();
};
exports.signup = async function (req, res, next) {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      gender,
      birthYear,
      birthMonth,
      birthday,
      verified,
    } = req.body;

    const encryptedPassword = await passwordHashing(password);
    const username = await generateUsername(firstName);
    const user = await User.create({
      firstName,
      lastName,
      username,
      email,
      password: encryptedPassword,
      gender,
      birthYear,
      birthMonth,
      birthday,
      verified,
    });
    res.status(201).json({
      message: 'created successfully',
      data: {
        user,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
