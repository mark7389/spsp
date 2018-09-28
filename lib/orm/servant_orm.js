const connection = require('../../config/connection');
/* @params to be determined
    =========================
    skeleton for database  querying functions
    
     */
module.exports = {
        getAll: function(cb){
            connection.query('call getAllUsers()',function(err, results, fields){
                    if(err){
                        cb(err,null)
                    }
                    else{
                        cb(null,results)
                    }
            })
        },
        addServant: function(obj, cb){
            let values = []
            for(key in obj){
                values.push(obj[key])
            }
            connection.query("call addServant(?,?,?,?,?)",[...values], function(err,results,fields){
                if(err){
                    cb(err,null)
                }
                else{
                    cb(null,results)
                }
            })
        },
        removeServantFromClass: function(id,class_id,cb){
            connection.query('call removeServantFromClass(?,?)',[id,class_id],function(err,results,fields){
                if(err){
                    cb(err,null)
                }
                else{
                    cb(null,results)
                }
            });
        }

}