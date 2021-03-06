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
    }
}