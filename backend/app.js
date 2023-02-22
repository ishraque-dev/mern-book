const cors = require('cors');
const express = require('express');
const { readdirSync } = require('fs');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();
app.use(cors());
app.use(express.json());
const routeDir = readdirSync(`${__dirname}/routes`);
// eslint-disable-next-line global-require
routeDir.forEach((f) => app.use('/api/v1', require(`./routes/${f}`)));

//MIDDLEWARE: Handling undefined routes
app.all('*', (req, _, next) => {
  next(new AppError(`Cant't find ${req.originalUrl} on this server`, 404));
});
/// MIDDLEWARE: Handling global errors
app.use(globalErrorHandler);
module.exports = app;
