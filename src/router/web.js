const express = require('express');
const router = express.Router();
const {getDefaultPage,getKhangHayHo} = require("../controllers/homeController");

router.get('/',getDefaultPage);
  
router.get('/khanghayho',getKhangHayHo);

module.exports = router