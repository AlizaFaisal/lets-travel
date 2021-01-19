let express = require('express');
let uniqid = require('uniqid');
let CallbackRequest = require('../models/callback-requests').CallbackRequest;
let router = express.Router();
let authMiddleware = require('../middleware/auth');

// router.get('/', authMiddleware, async (req, res) => {
//     let callbackrequests = await CallbackRequest.find();
//     res.send(callbackrequests);

// });
router.get('/', authMiddleware, async (req, resp) => {
    resp.send(await CallbackRequest.find());
});
router.post('/', async (req, res) => {
    let newCallbackRequest = new CallbackRequest({
        id: uniqid(),
        number: req.body.number,
        date: new Date()
    });
    await newCallbackRequest.save();
    res.send('Added');

});
router.delete('/:id', authMiddleware, async (req, res) => {
    let id = req.params.id;
    await CallbackRequest.deleteOne({ id: id });
    res.send('Deleted');

});
module.exports = router;