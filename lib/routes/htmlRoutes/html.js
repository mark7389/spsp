const router = require('express').Router();
const path = require('path');
router.route('/').get(function(req,res){
    res.status(200);
    res.sendFile(path.join(global.__root,'dist/spsp-attendance/index.html'));
});
router.route('/class/:id').get(function(req,res){
    res.status(200);
    res.sendFile(path.join(global.__root,'dist/spsp-attendance/index.html'));
});
router.route('/class/:id/:attendee_id').get(function(req,res){
    res.status(200);
    res.sendFile(path.join(global.__root,'dist/spsp-attendance/index.html'));
});
router.route('/attendee/:class_id/:id').get(function(req,res){
    res.status(200);
    res.sendFile(path.join(global.__root,'dist/spsp-attendance/index.html'));
});
router.route('/servant').get(function(req,res){
    res.status(200);
    res.sendFile(path.join(global.__root,'dist/spsp-attendance/index.html'));
});
router.route('/coordinator').get(function(req,res){
    res.status(200);
    res.sendFile(path.join(global.__root,'dist/spsp-attendance/index.html'));
});

module.exports =router;