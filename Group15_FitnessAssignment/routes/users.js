var express = require('express');
var router = express.Router();
const ctrlUsers = require('../controllers/users');

/* GET users listing. */

router.get('/', ctrlUsers.showLogin);
router.post('/', ctrlUsers.login);
router.get('/register', ctrlUsers.showRegister);
router.post('/register', ctrlUsers.register);


module.exports = router;
