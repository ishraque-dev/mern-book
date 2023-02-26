const User = require('../models/User');
const comparePassword = require('../utils/comparePassword');
const generateUsername = require('../utils/generateUsername');
const { createAndSendToken } = require('../utils/createAndSendToken');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

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
    return next(new AppError('Invalid email address', 400));
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

exports.signup = catchAsync(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    gender,
    birthYear,
    birthMonth,
    birthDate,
    verified,
  } = req.body;

  const username = await generateUsername(firstName);
  const user = await User.create({
    firstName,
    lastName,
    username,
    email,
    password,
    gender,
    birthYear,
    birthMonth,
    birthDate,
    verified,
  });
  await createAndSendToken(user, 201, res);
});

exports.userLoginWithValidation = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const isExists = await User.findOne({ email });

  if (isExists) {
    const comparedValue = await comparePassword(password, isExists.password);
    if (comparedValue) {
      await createAndSendToken(isExists, 200, res);
    } else {
      return next(new AppError('Login failed incurrent password', 400));
    }
  } else {
    return next(
      new AppError('User does not exists. Check your email and try again', 404)
    );
  }
});
