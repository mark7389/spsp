const connection =  require('../../config/connection');

module.exports = {
    getMenu: function (id, cb){
        connection.query('CALL getMenu(?)',[id],function(err, result, fields){
            if(err) cb(err,null);
            cb(null, result);
        })
    }
}