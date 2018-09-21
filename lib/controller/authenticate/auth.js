const orm = require('../../orm');
const auth = orm.auth;
const jwt = require('jsonwebtoken');
module.exports = {
    checkUser: function(req,res){
        
        auth.getUser(req.body, function(err, results){
            console.log("err:",err);
            if(err || results[0].length < 1) { res.json({auth:false}).status(401)} 
           else {res.json({token:jwt.sign({email:results[0][0].email,id:results[0][0].id}, 'q^nKm@T8t>'),auth:true});}
        })
    }
}
