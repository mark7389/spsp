const router = require('express').Router();
const menuController = require('../../controller/modify/menu');
const classController = require('../../controller/modify/classes');
const attendeesController = require('../../controller/modify/Attendees');
const servantController = require('../../controller/modify/servants');
//get services for coordinator with users
router.route('/coordinator/services/:token')
      .get(classController.getServicesClasses);
//load attendees/attendance
router.route('/attendees/:token/:class_id/:today')
      .get(attendeesController.getAttendanceByClass); 
//load all users for search
router.route('/users/all/:token')
      .get(servantController.getAll);
//remove servant from class
router.route('/servants/remove/:token/:id/:class_id')
      .get(servantController.deleteServantFromClass);
//add new or associate existing servant to class
router.route('/servants/add/:token')
      .post(servantController.addServantToClass);
//get specific attendee
router.route('/attendee/:token/:attendeeId/:classId')
      .get(attendeesController.getSingleAttendee);
//getMenuItems
router.route('/menu/:token')
      .get(menuController.getMenu);
//add Note 
router.route('/note/:token')
      .post(attendeesController.addOrUpdateNote);
//image upload
router.route('/image/:id/:token').post(attendeesController.uploadImage)
//home page // classes sorted by services
router.route('/classesservices/:token')
      .get(classController.getClassesServices);
//for main class view, get only attendees by class
router.route('/classattendees/:token/:class_id')
      .get(attendeesController.getClassAttendees); 
//a generic route for possible addition of classes to side menu **not in use**
router.route('/classes/:token')
      .get(classController.getClasses);
//get previous class dates...for dropdown..**not in use**
router.route('/classes/get_dates/:token/:class_id')
      .get(classController.getClassDates);
//take attendance 
router.route('/attendees/take_attendance')
      .post(attendeesController.takeAttendance); 
//add or update attendee
router.route('/attendee/update/:token')
      .post(attendeesController.addOrUpdateAttendee);
//add or update guardian
router.route('/guardian/update/:token')
      .post(attendeesController.addOrUpdateGuardian);
/// get recently added id for guardian add
router.route('/attendee/getbyparams/:token')
      .get(attendeesController.getSingleAttendeeByParams);
//add two guardians
router.route('/guardian/addmultiple/:token/:attendeeId')
      .post(attendeesController.addMultipleGuardians);
//delete Note
router.route('/note/:token/:id')
      .delete(attendeesController.deleteNote);
module.exports = router;