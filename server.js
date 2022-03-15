const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

app.get('/', (req, res) => {
    res.status(200).render('index')
})

app.get('/admin', (req, res) => {
    res.status(200).render('login')
})

app.listen(5000);