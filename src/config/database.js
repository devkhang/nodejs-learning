const mysql = require('mysql2/promise');
require('dotenv').config();
const mongoose = require('mongoose');



// const connection = mysql.createPool({
//     host:process.env.DB_HOST,
//     port:process.env.DB_PORT,
//     user:process.env.DB_USER,
//     database:process.env.DB_NAME,
//     password:process.env.DB_PWD,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
//   });

  const connection = async()=>{
    const options = {
      user: process.env.DB_USER,
      pass: process.env.DB_PWD,
      authSource: 'admin',
      authMechanism: 'SCRAM-SHA-1'
    };
    
    await mongoose.connect(process.env.DB_HOST,options)
      .then(() => {
        console.log('Successfully connected to MongoDB');
      })
      .catch(err => {
        console.error('Connection error', err);
      });
  }
module.exports = connection

// const connection = mysql.createPool({
//     host:process.env.DB_HOST,
//     port:process.env.DB_PORT,
//     user:process.env.DB_USER,
//     database:process.env.DB_NAME,
//     password:process.env.DB_PWD,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
//   });