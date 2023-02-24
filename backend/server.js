process.on('uncaughtException', (err) => {
  console.log(err);
  process.exit(1);
});
// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require('mongoose');

const app = require('./app');
require('dotenv').config();

const DB = process.env.DB.replace('<password>', process.env.DB_PASSWORD);
const port = process.env.PORT || 8000;

(async function () {
  await mongoose.connect(DB);
  console.log('Connected to database');
})();

const server = app.listen(port, () => {
  console.log('listening on port 8000');
});
process.on('unhandledRejection', (error) => {
  console.log(error.name, error.message);
  console.log('Unhandled Rejection');
  server.close(() => {
    console.log('Server is shutting down...');
    process.exit(1);
  });
});
