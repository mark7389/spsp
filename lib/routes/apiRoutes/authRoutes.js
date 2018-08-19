const router = require('express').Router();
const authController = require('../../controller/authenticate/auth');

router.post('/login',authController.checkUser);

module.exports = router;