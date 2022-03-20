const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
const adminRouter = require('./routes/admin');
const initializePassport = require('./config/passport')

initializePassport();

require('dotenv').config();
require('mongoose');

// set views
app.set('view engine', 'ejs')

// middleware
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use('/', indexRouter)
app.use('/admin', adminRouter);

app.listen(5000, () => console.log('Listening on port 5000'));