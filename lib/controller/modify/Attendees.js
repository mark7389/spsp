const attendees = require('../../orm/attendees_orm');
const jwt = require('jsonwebtoken');

module.exports = {
    getAttendanceByClass: function(req, res){
            let class_id = req.params.class_id;
            let today = req.params.today;
            let decodedToken = jwt.verify(req.params.token,'q^nKm@T8t>');
            console.log(decodedToken);
            if(decodedToken.email){
                 attendees.getAttendees(class_id,today,function(err,data){
                     if(err) {res.status(404).json('no attendance');}
                    else{
                        res.status(200);
                     res.json({info:data[0]});

                    }
                     
                 })
            }else{
                res.status(401);
            }

    },
    getClassAttendees: function(req, res){
        let class_id = req.params.class_id;
        let decodedToken = jwt.verify(req.params.token,'q^nKm@T8t>');
        if(decodedToken.email){
            attendees.getOnlyAttendees(class_id,function(err,data){
                if(err){
                    console.log(err);
                    res.status(404).json('no attendance');
                }else{
                    res.status(200);
                    res.json({info:data[0]});
                }
            })
        }
    },
    takeAttendance: function(req, res){
        let decodedToken = jwt.verify(req.body.token,'q^nKm@T8t>');
        if(decodedToken.email){
            attendees.takeAttendance(req.body.data,function(err,data){
                if(err) res.status(504);

                res.status(200);
                res.json(data);
            })
        }
    },
    getSingleAttendee:function(req,res){
        let decodedToken = jwt.verify(req.params.token,'q^nKm@T8t>');
        let dataObj;
        if(decodedToken.email){
            attendees.getAttendee(req.params.attendeeId,req.params.classId,function(err,data){
                if(err){
                    res.status(404)
                    res.json('not found or error');
                }
                else{
                    if(data){
                        
                        dataObj = data[0][0];
                        dataObj['guardians'] = data[1];
                        dataObj['notes'] = data[2];
                        res.status(200);
                        res.json({info:dataObj});
                    }
                }
            })
        }
    },
    addOrUpdateAttendee: function(req, res){
        let decodedToken = jwt.verify(req.params.token,'q^nKm@T8t>');
        let dataObj = req.body;
        if(decodedToken.email){
            attendees.addAttendee(dataObj,function(err,data){
                if(err){
                    console.log(err);
                    res.status(500)
                    res.json('fail');
                }
                else{
                    if(data){
                        res.status(200);
                        res.json({inserted:true,data:data});
                    }
                }
            })
        }
    },
    addOrUpdateGuardian: function(req, res){
        let decodedToken = jwt.verify(req.params.token,'q^nKm@T8t>');
        let dataObj = req.body;
        if(decodedToken.email){
            attendees.addGuardian(dataObj,function(err,data){
                if(err){
                    res.status(500)
                    res.json('fail');
                }
                else{
                    if(data){
                        res.status(200);
                        res.json({inserted:true,data:data});
                    }
                }
            })
        }
    },
    addOrUpdateNote: function(req,res){
        let decodedToken = jwt.verify(req.params.token,'q^nKm@T8t>');
        let dataObj = req.body;
        if(decodedToken.email){
            attendees.addNote(dataObj,function(err,data){
                if(err){
                    console.log(err);
                    res.status(500)
                    res.json('fail');
                }
                else{
                    if(data){
                        res.status(200);
                        res.json({inserted:true,data:data});
                    }
                }
            })
        }
    },
    
    deleteNote: function(req,res){
        let decodedToken = jwt.verify(req.params.token,'q^nKm@T8t>');
        let id = req.params.id;
        if(decodedToken.email){
            attendees.deleteNote(id,function(err,data){
                if(err){
                    res.status(500)
                    res.json('fail');
                }
                else{
                    if(data){
                        res.status(200);
                        res.json({inserted:true,data:data});
                    }
                }
            })
        }
    },
    uploadImage: function(req,res){
        let decodedToken = jwt.verify(req.params.token,'q^nKm@T8t>');
        let id = req.params.id;
        if(decodedToken.email){
            console.log(req.body.length);
            attendees.addImage(id,req.body,function(err,data){
                if(err){
                    console.log(err);
                    res.status(304)
                    res.json("not saved");
                }else{
                    res.status(200)
                    res.json({inserted:true,data:data})
                }
            })
        }
        else{
            res.status(401);
        }
    }
}