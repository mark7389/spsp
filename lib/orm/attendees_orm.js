const connection =  require('../../config/connection');


module.exports = {
    getAttendees: function(class_id,cb){
        connection.query('CALL getAttendeesByClass(?)',[class_id],function(err, result, fields){
            if(err) cb(err,null);
            cb(null, result);
        })
    }
}