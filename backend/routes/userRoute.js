const express = require('express');

const router = express.Router();
const {
  usernameValidation,
  emailValidation,
  signup,
} = require('../controllers/userController');

router.route('/signup').post(usernameValidation, emailValidation, signup);

module.exports = router;
