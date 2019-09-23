var express = require('express');
var router = express.Router();
var ctrlUsers = require('../controllers/users');

/* GET users listing. */

router.get('/login', ctrlUsers.showLogin);
router.post('/login', ctrlUsers.login);
router.get('/register', ctrlUsers.showRegister);
router.post('/register', ctrlUsers.Register);


module.exports = router;
