const connection =  require('../../config/connection');

module.exports = {
    getClasses: function(id,cb){
        connection.query('CALL getClasses(?)',[id],function(err, result, fields){
            if(err) cb(err,null);
            cb(null, result);
        })
    }
}