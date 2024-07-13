const getDefaultPage = (req,res)=>{
    res.send('defaultpage');
}

const getKhangHayHo = (req,res)=>{
    res.render('example.ejs')
}

module.exports = {getDefaultPage,getKhangHayHo}