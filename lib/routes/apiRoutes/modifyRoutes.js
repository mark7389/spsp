const router = require('express').Router();
const menuController = require('../../controller/modify/menu');
const classController = require('../../controller/modify/classes');
const attendanceController = require('../../controller/modify/Attendees');

router.route('/attendees/:token/:class_id/:today')
.get(attendanceController.getAttendanceByClass) 

router.route('/menu/:token').get(menuController.getMenu)

router.route('/classesservices/:token').get(classController.getClassesServices)

router.route('/classattendees/:token/:class_id').get(attendanceController.getClassAttendees) 

router.route('/classes/:token').get(classController.getClasses)

router.route('/classes/get_dates/:token/:class_id').get(classController.getClassDates)

router.route('/attendees/take_attendance').post(attendanceController.takeAttendance) 

module.exports = router;