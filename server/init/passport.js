const passport = require('passport');
const Passport42Strategy = require('passport-42').Strategy;
const fs = require('fs');

const keys = JSON.parse(fs.readFileSync('/Users/julien/42keys.json', 'utf8'));

passport.use(
  new Passport42Strategy({
    clientID: keys.uid,
    clientSecret: keys.secret,
    callbackURL: 'http://127.0.0.1:8080/auth/redirect',
  }, (accessToken, refreshToken, profile, cb) => {
    cb(null, { accessToken, refreshToken });
  }),
);

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});
