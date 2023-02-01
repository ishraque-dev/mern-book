const express = require('express');

const router = express.Router();
const { getUsers } = require('../controllers/userController');

router.get('/test', getUsers);

module.exports = router;
