const connection = require('../config/database');
const {getALLUser,getUserById,delete_User} = require('../services/CRUDService')
const getDefaultPage = async (req,res)=>{
    let result = await getALLUser();
    return res.render('home.ejs',{ list_user :result});
}

const test = (req,res) =>{
    res.render('test.ejs');
}

const postNewUser = async (req,res)=>{
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.City;

    // connection.query(
    //     `INSERT INTO Users (email, name, city)
    //     VALUES (?,?,?); `,[email,name,city],
    //     (err,result) => {
    //         if(err){
    //             console.log(err);
    //         }else{
    //             console.log('create successfully !');
    //         }
    //     }
    // )

    let [result,fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?,?,?); `,[email,name,city]
    )

    console.log(result);
    
    res.send("create new user");
}

const getKhangHayHo = (req,res)=>{
    res.render('example.ejs');
}

const get_Create_User_Page = (req,res)=>{
    res.render('create.ejs');
}

const get_confirm_form = async(req,res)=>{
    let userid = req.params.id;
    let result = await getUserById(userid);
    res.render("confirm.ejs",{user:result});
}

const delete_user = async(req,res)=>{
    let userid = req.body.id;
    let result = await delete_User(userid);
    res.redirect('/');
    // res.send("it work");
}

const get_update_page = async(req,res)=>{
    let userid = req.params.id;
    let result = await getUserById(userid);
    res.render('update.ejs',{user:result});
}
module.exports = {getDefaultPage,getKhangHayHo,postNewUser,get_Create_User_Page,get_update_page,get_confirm_form,delete_user}