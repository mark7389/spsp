const router = require('express').Router();
const path = require('path');
router.route('/*').get(function(req,res){
    res.status(200);
    res.sendFile(path.join(__dirname,'../../../dist/spsp-attendance/index.html'));
});

module.exports =router;