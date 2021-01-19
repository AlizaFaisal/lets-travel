let express = require('express');
let uniqid = require('uniqid');
let router = express.Router();
let Mail = require('../models/mails').Mail;
let authMiddleware = require('../middleware/auth');

router.get('/', authMiddleware, async (req, res) => {
    let mails = await Mail.find();
    res.send(mails);
});
router.post('/', async (req, res) => {
    let newMail = new Mail({
        id: uniqid(),
        username: req.body.username,
        email: req.body.email,
        text: req.body.text,
        date: new Date()
    });
    await newMail.save();
    res.send('created')

});
router.delete('/:id', authMiddleware, async (req, res) => {
    let id = req.params.id;
    await Mail.deleteOne({ id: id });
    res.send('deleted');

});
module.exports = router;