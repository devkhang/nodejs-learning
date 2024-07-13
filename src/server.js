require('dotenv').config()
const express = require('express');
const ConfigViewEngine = require('./config/viewEngine')
const webRouter = require('./router/web');

const app = express();
const port = process.env.PORT||8080;
const host_name = process.env.HOST_NAME||'localhost';

ConfigViewEngine(app);

app.use(webRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})