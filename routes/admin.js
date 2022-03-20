const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', checkAuthenticated, (req, res) => {
    res.redirect('/admin/dashboard');
})

router.get('/dashboard', checkAuthenticated, (req, res) => {
    res.render('dashboard');
})

router.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('login');
})

router.post('/login', checkNotAuthenticated,
    passport.authenticate('local', { failureRedirect: '/admin/login' }),
    (req, res) => {
        res.redirect('/admin/dashboard');
    });

router.post('/logout', (req, res) => {
    req.logout();
    res.redirect('/admin/login');
})

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/admin/login')
    }
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        res.redirect('/admin/dashboard');
    } else {
        next();
    }
}

module.exports = router;