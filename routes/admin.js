const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

require('dotenv').config();

router.get('/', (req, res) => {
    res.redirect('login');
})

router.get('/login', (req, res) => {
    res.status(200).render('login');
})

router.post('/login', async (req, res) => {
    const validUser = await bcrypt.compare(req.body.username, process.env.ADMIN_USER);
    const validPassword = await bcrypt.compare(req.body.password, process.env.ADMIN_PASS);
    const validCredentials = validUser && validPassword;

    validCredentials ? res.render('admin') : res.redirect('/admin/login');
})

module.exports = router;