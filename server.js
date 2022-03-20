const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
const adminRouter = require('./routes/admin');
const passport = require('passport')
const session = require('express-session');
const initializePassport = require('./config/passport')

require('dotenv').config();

initializePassport();

// set views
app.set('view engine', 'ejs')

// middleware
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());
app.use('/', indexRouter);
app.use('/admin', adminRouter);

app.listen(5000, () => console.log('Listening on port 5000'));