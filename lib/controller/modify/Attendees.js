const attendees = require('../../orm/attendees_orm');
const jwt = require('jsonwebtoken');

module.exports = {
    getAttendanceByClass: function(req, res){
            let class_id = req.params.class_id;
            if(req.params.token){
                 attendees.getAttendees(class_id,function(err,data){
                     if(err) res.status(404).json('no attendance');

                     res.status(200).json(data[0]);
                 })
            }

    }
}