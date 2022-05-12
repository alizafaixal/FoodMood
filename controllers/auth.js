let jwk = require('jsonwebtoken');
let secretKey = 'jdskfajfdkj'

function generateToken(user){
    let payload = {
        email: user.email,
        password: user.password
    }
    return jwk.sign(payload, secretKey);
}

function checkToken(token){
  try {
    let result = jwk.verify(token, secretKey);
    return result;
  } catch(error){
    return false;
  }
}

module.exports = {generateToken, checkToken};