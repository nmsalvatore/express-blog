const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res) => {
    res.redirect('login');
})

router.get('/login', (req, res) => {
    res.render('login');
})

router.post('/login',
    passport.authenticate('local', { failureRedirect: '/admin/login' }),
    (req, res) => {
        res.render('dashboard');
    });

module.exports = router;