const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('./keys');

module.exports = function(passport){
  passport.use(
    new GoogleStrategy({
      clientID: keys.googleClientID,
      clientSecret:keys.googleClientSecret,
      callbackURL:'/auth/google/callback',
      proxy: true
    },async (accessToken, refreshToken, profile, done) => {
      console.log("check");
      console.log(accessToken);
      console.log("check");
      console.log(profile);
    })
  )
}
