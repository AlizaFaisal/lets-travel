let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//creating a callback-request Schema

let callbackRequestSchema = new Schema({
    id: String,
    number: String,
    date: Date
});

let CallbackRequest = mongoose.model('CallbackRequest', callbackRequestSchema, 'callback-requests');
//creating & saving callback to db
// let newCallbackrequest = new CallbackRequest({
//     id: 1,
//     number: +1111,
//     date: new Date()
// });
// newCallbackrequest.save();
module.exports = { CallbackRequest: CallbackRequest };