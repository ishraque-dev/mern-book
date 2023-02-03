// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require('mongoose');
const cors = require('cors');
const app = require('./app');
require('dotenv').config();

app.use(cors());

const DB = process.env.DB.replace('<password>', process.env.DB_PASSWORD);
const port = process.env.PORT || 8000;

(async function () {
  try {
    await mongoose.connect(DB);
    console.log('Connected to database');
  } catch (error) {
    console.log(error);
  }
})();

app.listen(port, () => {
  console.log('listening on port 8000');
});
