const connection =  require('../../config/connection');


module.exports = {
    getAttendees: function(class_id,date,cb){
        connection.query('CALL getAttendeesByClass(?,?)',[class_id,date],function(err, result, fields){
            console.log('Err: ' + err);
            if(err) {cb(err,null);}
            
            else {cb(null, result);} 
        })
    },
    takeAttendance: function(attendanceArr,cb){
        let values = [];
        for(let i = 0 ; i < attendanceArr.length; i++){
            values.push([attendanceArr[i].class_id,attendanceArr[i].attendee_id,attendanceArr[i].class_date,attendanceArr[i].present]);
        }
        values = values.join(";");
        
        let query= `INSERT INTO Attendance (class_id,attendee_id,class_date,present) values ?`;
        let procedure = `call takeAttendance(?)`
        connection.query(procedure, [values],function(err,result,fields){
                if(err) cb(err,null);
                console.log('err: '+err);
                console.log('results: '+ JSON.stringify(result));  
                cb(null,result);
        });
    },
    getOnlyAttendees: function(class_id,cb){
        connection.query('CALL getAttendeesOnly(?)', [class_id], function(err,result,fields){
            if(err){
                cb(err,null)
            }
            else{
               cb(null,result)
            }
        })
    }
}