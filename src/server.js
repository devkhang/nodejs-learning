require('dotenv').config()
const express = require('express');
const ConfigViewEngine = require('./config/viewEngine')
const webRouter = require('./router/web');
const connection = require('./config/database');

const app = express();
const port = process.env.PORT||8080;
const host_name = process.env.HOST_NAME||'localhost';
app.use(express.json());
app.use(express.urlencoded( {extended : true}))

ConfigViewEngine(app);

app.use(webRouter);

// connection.query(
//   'SELECT * FROM Users u',
//   function (err, results, fields) {
//     console.log("result>>>>="+JSON.stringify(results, null, 2)); // results contains rows returned by server
//   }
// )
(async()=>{
  try{
    await connection();
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  }catch(err){
    console.log(err);
  }
})();