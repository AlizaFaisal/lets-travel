let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let mailSchema = new Schema({
    id: String,
    username: String,
    email: String,
    text: String,
    date: Date
});
let Mail = mongoose.model('Mail', mailSchema, 'mails');
module.exports = { Mail: Mail }
//adding mail to db
// let Mail = require('./models/mails').Mail;

// let newMail = new Mail({
//     id: 1,
//     username: 'Aliza',
//     email: 'Aliza@gmail.com',
//     text: 'Some msg',
//     date: new Date()
// });
// newMail.save();
