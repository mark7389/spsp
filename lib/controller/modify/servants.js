const servant = require('../../orm/servant_orm');
const jwt = require('jsonwebtoken');
module.exports = {
        getAll: function(req,res){
            let detokenize;
            let id;
            let email;
            if(req.params.token){
                try{
                detokenize = jwt.verify(req.params.token,'q^nKm@T8t>');
                id = detokenize['id'];
                email = detokenize['email'];
                }
                catch{
                    res.status(401).json('unable to authenticate');
                }
            }
            if(id && email){
                servant.getAll(function(err,data){
                    if(err){
                        console.log(err)
                        res.status(404)
                    }else{
                        res.status(200);
                        res.json(data[0]);
                    }
                })
            }
            
        },
        addServantToClass: function(req,res){
            let detokenize;
            let id;
            let email;
            if(req.params.token){
                try{
                detokenize = jwt.verify(req.params.token,'q^nKm@T8t>');
                id = detokenize['id'];
                email = detokenize['email'];
                }
                catch{
                    res.status(401).json('unable to authenticate');
                }
            }
            if(id && email){
                servant.addServant(req.body, function(err,data){
                    if(err){
                        console.log(err)
                        res.status(404)
                    }
                    else{
                        res.status(200)
                        res.json(data)
                    }
                })
            }
        },
        deleteServantFromClass:function(req,res){
            let detokenize;
            let id;
            let email;
            if(req.params.token){
                try{
                detokenize = jwt.verify(req.params.token,'q^nKm@T8t>');
                id = detokenize['id'];
                email = detokenize['email'];
                }
                catch{
                    res.status(401).json('unable to authenticate');
                }
            }
            if(id && email){
                servant.removeServantFromClass(req.params.id,req.params.class_id,function(err,data){
                    if(err){
                        console.log(err)
                        res.status(404)
                    }
                    else{
                        res.status(200)
                        res.json(data)
                    }
                })
            }
        }
}