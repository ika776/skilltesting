const passport=require('passport')
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const userModel=require('./userModel')

var bio=[]


  passport.serializeUser(function(user, done) {done(null, user)});
  passport.deserializeUser(function(user, done) {done(null, user);});

  passport.use(new GoogleStrategy({
    clientID: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    callbackURL: "http://localhost:3000/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    bio.push(profile.displayName)
    bio.push(profile.id)
    bio.push(profile.emails[0].value)
    
      return done(null, profile);
    // return console.log(profile.displayName);
  }
));
const tampung= async (req,res)=>{
  await userModel.create({ username:bio[0], email:bio[2], idEmail:bio[1]});
  res.send(`WELCOME ${bio[0]}`)
}
module.exports={tampung}