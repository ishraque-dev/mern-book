const cors = require('cors');
const express = require('express');
const { readdirSync } = require('fs');

const app = express();
app.use(cors());
app.use(express.json());
const routeDir = readdirSync(`${__dirname}/routes`);
// eslint-disable-next-line global-require
routeDir.forEach((f) => app.use('/api/v1', require(`./routes/${f}`)));
module.exports = app;
