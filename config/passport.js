const LocalStrategy = require('passport-local').Strategy;
const User = require('./db');
const passport = require('passport');
const bcrypt = require('bcrypt');

function initialize() {
    passport.use(new LocalStrategy(
        function(username, password, done) {
            User.findOne({ username: username }, function (err, user) {
                if (err) { return done(err); }
                if (!user) { return done(null, false); }
                if (!bcrypt.compareSync(password, user.password)) { return done(null, false); }
                
                return done(null, user);
            });
        }
    ));

    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser((id, done) => {
        User
            .findById(id)
            .then(user => {
                done(null, user);
            });
    });
}

module.exports = initialize