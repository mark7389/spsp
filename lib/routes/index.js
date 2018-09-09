const router = require('express').Router();

const apiRoutes = require('./apiRoutes/api');
const htmlRoutes = require('./htmlRoutes/html');

router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

module.exports = router;
