const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const app = express();
const cors = require('cors');
const { readdirSync } = require('fs');

app.use(cors());

const routeDir = readdirSync(`${__dirname}/routes`);
// eslint-disable-next-line global-require
routeDir.forEach((f) => app.use('/api', require(`./routes/${f}`)));
app.listen(8000, () => {
  console.log('listening on port 8000');
});
