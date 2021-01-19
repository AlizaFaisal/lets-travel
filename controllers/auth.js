let jwt = require('jsonwebtoken');
let secret = 'w85769fskldfjl';

//creating a function to generate token

function generateToken(user) {
    let payload = {
        email: user.email,
        password: user.password
    }
    return jwt.sign(payload, secret)
}
//creating function to verify token
function checkToken(token) {
    return jwt.verify(token, secret)
}
module.exports = { generateToken, checkToken }