const connection = require('../../config/connection');

module.exports = {
    getUser: function(email,cb){
        console.log(email);
        connection.query('CALL getUser(?)',[email], function(err, results, fields){
                if(err) cb(err,null);

                cb(null,results);
        })
    }
}