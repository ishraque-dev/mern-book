const express = require('express');

const router = express.Router();
const {
  usernameValidation,
  emailValidation,
  signup,
  userLoginWithValidation,
} = require('../controllers/userController');

router.route('/signup').post(usernameValidation, emailValidation, signup);
router.route('/login').post(userLoginWithValidation);
module.exports = router;
