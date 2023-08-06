const express = require('express');
const router = express.Router();
const {login, token, logout} = require('../controllers/authController');

router.route('/login').post(login).get(token);
router.route('/logout').post(logout);

module.exports = router;