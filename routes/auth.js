const express = require('express');
const router = express.Router();

const authController = require('../controller/auth');
const passport = require('passport');
const { storeReturnTo } = require('../middlewares/isAuth');
router.get('/register', authController.getRegister);

router.post('/register', authController.register);

router.get('/login', authController.getLogin);

router.post('/login', storeReturnTo, passport.authenticate('local',

    { failureFlash: true, failureRedirect: '/auth/login' }
),
    authController.login
);

router.get('/logout', authController.getLogout);

module.exports = router;