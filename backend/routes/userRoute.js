const express = require('express');

const router = express.Router();
const {
  usernameValidation,
  emailValidation,
  signup,
  checkUserExists,
} = require('../controllers/userController');

router.route('/signup').post(usernameValidation, emailValidation, signup);
router.route('/login').post(checkUserExists);
module.exports = router;
