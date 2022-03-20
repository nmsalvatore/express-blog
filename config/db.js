const mongoose = require('mongoose');

require('dotenv').config();

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err.message))

const userSchema = new mongoose.Schema({
    username: String,
    password: String
})

const User = mongoose.model('User', userSchema);

module.exports = User;