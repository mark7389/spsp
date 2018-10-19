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
        });
    },
    getAttendee: function(attendee_id,class_id,cb){
        connection.query('CALL getAttendee(?,?)', [attendee_id,class_id],function(err,result,fields){
            if(err){
                console.log(err);
                cb(err,null);
            }
            else{
                cb(null,result);
            }
        })
    },
    getAttendeeByName:function(AttnObj,cb){
            let values = [];
            for (key in AttnObj){
                values.push(AttnObj[key]);
            }
            connection.query("CALL getAttendeeByName(?,?,?)",[...values],function(err,result,fields){
                if(err){
                    console.log(err);
                    cb(err,null)
                }
                else{
                    cb(null,result)
                }
            } )
    },
    addMultipleGuardians: function (guardians, cb){
        let values = [];
        for (key in guardians){
            values.push(guardians[key])
        }
        connection.query("CALL addMultipleGuardians()", [...values], function(err,result,fields){
            if(err){
                cb(err,null)
            }else{
                cb(null,result)
            }
        })
    },
    addGuardian: function(GuardianObject, cb){
        let values = [];
        for(key in GuardianObject){
            values.push(GuardianObject[key]);
        }
        
        if(!GuardianObject['id']){
            connection.query('call addGuardian(?,?,?,?,?,?,?)',[...values],function(err,result,fields){
                if(err){
                    cb(err,null);
                }
                else{
                    cb(null,result);
                }
            })
        }
        else{
            connection.query('call updateGuardian(?,?,?,?,?,?,?,?)',[...values],function(err,result,fields){
                if(err){
                    cb(err,null);
                }
                else{
                    cb(null,result);
                }
            })
        }
        
    },
    addorUpdateAttendee: function(attObj, cb){
        let values = [];
        for(key in attObj){
            values.push(attObj[key]);
        }
        connection.query('call insertOrUpdateAttendee(?,?,?,?,?,?,?,?,?,?,?)',[...values],function(err,result,fields){
            if(err){
                cb(err,null);
            }
            else{
                cb(null,result);
            }
        });
    },
    addAttendee: function(attObj,cb){
        let values = [];
        for(key in attObj){
            values.push(attObj[key]);
        }
        if(attObj['id']){
            connection.query('call updateAttendee(?,?,?,?,?,?,?,?,?,?)',[...values],function(err,result,fields){
                if(err){
                    cb(err,null);
                }
                else{
                    cb(null,result);
                }
            })
        }else{
            connection.query('call addAttendee(?,?,?,?,?,?,?,?,?,?)',[...values],function(err,result,fields){
                if(err){
                    cb(err,null);
                }
                else{
                    cb(null,result);
                }
            })
        }
    },
    addNote: function(noteObj,cb){
         let values = [];
         for (key in noteObj){
             values.push(noteObj[key]);
         }
         if(noteObj['id']){
            connection.query('call updateNote(?,?)',[...values],function(err,result,fields){
                if(err){
                    cb(err,null);
                }
                else{
                    cb(null,result);
                }
            });
         }else{
            connection.query('call addNote(?,?,?,?)',[...values],function(err,result,fields){
                if(err){
                    cb(err,null);
                }
                else{
                    cb(null,result);
                }
            });
         }
        
    },
    deleteNote: function(id,cb){
        connection.query('call deleteNote(?)',[id],function(err,result,fields){
            if(err){
                cb(err,null);
            }
            else{
                cb(null,result);
            }
        });
    },
    addImage: function (id,image,cb){
        connection.query('call uploadImage(?,?)',[id,image],function(err,result,fields){
            if(err){
                cb(err,null)
            }else{
                cb(null,result)
            }
        })
    },
    updateAttendeeClass: function(attendee_id,class_id,date,newClassId,cb){
        connection.query('call updateAttendeeClass(?,?,?,?)',[attendee_id,class_id,date,newClassId], function(err,results,fields){
            if(err){
                cb(err,null);
            }
            else{
                cb(null,results);
            }
        })
    }
}