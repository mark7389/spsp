const router = require('express').Router();
const menuController = require('../../controller/modify/menu');
const classController = require('../../controller/modify/classes');
const attendanceController = require('../../controller/modify/Attendees');

router.get('/attendance/:token/:class_id', attendanceController.getAttendanceByClass);
router.get('/menu/:token',menuController.getMenu);
router.get('/classes/:token', classController.getClasses);

module.exports = router;