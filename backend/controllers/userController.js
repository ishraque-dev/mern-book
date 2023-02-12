const User = require('../models/User');
const passwordHashing = require('../functions/hashPassword');
const comparePassword = require('../functions/comparePassword');
const generateUsername = require('../functions/generateUsername');
const { generateJWT } = require('../functions/generateJWT');

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
      birthDate,
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
      birthDate,
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
exports.userLoginWithValidation = async function (req, res, next) {
  const { email, password } = req.body;
  try {
    const isExists = await User.findOne({ email });

    if (isExists) {
      const comparedValue = await comparePassword(password, isExists.password);
      if (comparedValue) {
        const token = generateJWT(isExists._id);
        res.status(200).json({
          status: 'success',
          message: 'Login successful',
          data: Object.assign(isExists, { token: token }),
        });
      } else {
        res.status(404).json({
          status: 'error',
          message: 'Login failed incurrent password',
        });
      }
    } else {
      res.status(404).json({
        status: 'error',
        message: 'User does not exists. Check your email and try again',
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};
