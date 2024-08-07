const connection = require('../config/database')

const getALLUser = async ()=>{
    [result,fields] = await connection.query(
        `select * from Users `
    )
    return result;
}

const getUserById = async(userid)=>{
    [result,fields] = await connection.query(
        `select * from Users where id = ?`,[userid]
    )
    return result;
}

const delete_User = async(userid)=>{
    [result,fields] = await connection.query(
        `delete from Users where id = ?`,[userid]
    )
    return result;
}


module.exports = {
    getALLUser,
    getUserById,
    delete_User
}