const express = require('express');
const router = express.Router();

const authController = require('../controller/auth');
const passport = require('passport');
const { storeReturnTo } = require('../middlewares/isAuth');

router.route('/register')
    .get(authController.getRegister)
    .post(authController.register);

router.route('/login')
    .get(authController.getLogin)
    .post(storeReturnTo, passport.authenticate('local',

        { failureFlash: true, failureRedirect: '/auth/login' }
    ),
        authController.login
    );

router.get('/logout', authController.getLogout);

module.exports = router;