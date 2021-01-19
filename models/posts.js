//requiring mongoose
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
//connecting to database
mongoose.connect('mongob://localhost/travels', () => console.log('connected to database'));
//craeting a schema for posts
let postSchema = new Schema({
    id: String,
    name: String,
    dateCreated: Date,
    country: String,
    description: String,
    text: String,
    image: String
});
//creating a post model based on that schema created 
let Post = mongoose.model('Post', postSchema);

//exporting post model
module.exports = { Post: Post }
//creating a new collection
// let post1 = new Post({
//     id: 2,
//     name: 'Statue of liberty',
//     dateCreated: new Date(),
//     country: 'USA',
//     description: 'Some descriptio',
//     text: 'some text',
//     image: './public/images/img-2.jpg'
// });
//saving the collection to the db
// post1.save();