let express = require('express');
let router = express.Router();
let User = require('../models/users').User;
let bcrypt = require('bcrypt');
let auth = require('../controllers/auth');

router.post('/login', async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let user = await User.find().where({ email: email });
    if (user.length > 0) {
        let result = await bcrypt.compare(password, user[0].password);
        if (result) {
            let token = auth.generateToken(user[0]);
            res.cookie('auth_token', token);
            res.send({ redirectURL: '/admin' });
        } else {
            res.status(400);
            res.send('no user found, write the correct email & password');
        }

    } else {
        res.status(400);
        res.send('no user found, write the correct email & password');
    }

});
router.post('/register', async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let user = await User.find().where({ email: email });
    let encryptPass = await bcrypt.hash(password, 12);
    if (user.length === 0) {
        let newUser = new User({
            email: email,
            password: encryptPass
        })
        await newUser.save();
        res.send('User registered, login now')

    } else {
        res.send('User exist with this email address, Please Login')
    }
});
module.exports = router;