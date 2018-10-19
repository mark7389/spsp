const connection =  require('../../config/connection');

module.exports = {
    getClasses: function(id,cb){
        connection.query('CALL getClasses(?)',[id],function(err, result, fields){
            if(err) cb(err,null);
            cb(null, result);
        })
    },
    getClassDates: function(id,cb){
        connection.query('Call getDates(?)',[id],function(err, result, fields){
            if(err) cb(err,null);
            cb(null,result);
        })
    },
    getServicesClasses: function(id,cb){
        connection.query('Call getServicesClasses(?)',[id], function(err,results,fields){
            if(err){
                cb(err,null)
            }
            else{
                cb(null,results)
            }
        })
    },
    getClassesByService: function(id,cb){
        connection.query('call getClassesByService(?)', [id], function(err,results,fields){
            console.log(results);
            if(err){

                cb(err,null);
            }
            else{
                cb(null,results);
            }
        })
    }
}