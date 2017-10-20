const passport = require('passport');
const Passport42Strategy = require('passport-42').Strategy;

const keys = require('../../42keys.json');

passport.use(
  new Passport42Strategy({
    clientID: keys.uid,
    clientSecret: keys.secret,
    callbackURL: 'http://127.0.0.1:8080/login/redirect',
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
