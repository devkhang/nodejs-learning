const express = require('express');
const router = express.Router();
const {getDefaultPage,getKhangHayHo, postNewUser,get_Create_User_Page,get_update_page,get_confirm_form,delete_user} = require("../controllers/homeController");

router.get('/',getDefaultPage);
  
router.get('/khanghayho',getKhangHayHo);

router.post('/createNewUser',postNewUser);

router.get('/create',get_Create_User_Page);

router.get('/update/:id',get_update_page);

router.post('/delete/:id',get_confirm_form);

router.post('/delete',delete_user);

module.exports = router