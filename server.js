const express = require('express');
const homeRouter = require('./routes/index');
const adminRouter = require('./routes/admin');
const app = express();

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use('/', homeRouter);
app.use('/admin', adminRouter)

app.listen(5000);