const router = require('express').Router();
const authRoutes = require('./authRoutes');
const modifyRoutes = require('./modifyRoutes');

//path is '/api/{login or createUserAccount or modify}/'
router.use('/authenticate',authRoutes);
// router.use('/createUserAccount', authRoutes);
router.use('/modify', modifyRoutes);


module.exports = router;