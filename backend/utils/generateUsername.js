const User = require('../models/User');

async function generateUsername(firstName) {
  const randomNumber = Math.floor(Math.random() * 100);
  let username = `${firstName}_${randomNumber}`;

  const existingUsername = await User.findOne({ username: username });

  if (existingUsername && username === existingUsername.username) {
    username += Date.now().toString().slice(-2);
  }
  return username;
}

module.exports = generateUsername;
