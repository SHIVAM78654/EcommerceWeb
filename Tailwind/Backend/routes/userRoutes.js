const express = require('express');
const router = express.Router();
const userController = require('../controllers/authController');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/forgot-password', userController.forgotPassword);
router.post('/reset-password', userController.resetPassword); // <-- fixed here

module.exports = router;