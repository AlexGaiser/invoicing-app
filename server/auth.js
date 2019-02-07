const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcrypt');
const passport = require('passport');
const { User } = require('./models');

const jwt = require('jsonwebtoken');
const SECRET = "my super duper secret sacrt";
const sign = (payload) => jwt.sign(payload, SECRET);


const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET
};

passport.use(new JwtStrategy(opts, async (payload, done) => {
  // it takes the passport variable defined from the passport middleware package and sets to use a new instance of the jwtstrategy package taking the payload from the request and takes the payload 's id (request body's id value if present) and returns it for use in authentication in the server.js file. That user information is then used inside server.js to compare against the records in the database. If it fails to find a corresponding id it returns false and authentication will fail in server.js resulting in a 401 error code.
  // essentially it decodes the token passed to the server.js and checks if it matches the required token in the records database. If it does it returns the user information and if it fails it returns false along with the error message. 
  try {
    const user = await User.findByPk(payload.id);
    return done(null, user);
  }
  catch(e) {
    return done(e, false);
  }
}));

  

module.exports = {
  // this exports the passport variable for use elsewhere, wherever authentication is needed
  passport,
  // this exports the encoded version of the payload.
  sign
};
