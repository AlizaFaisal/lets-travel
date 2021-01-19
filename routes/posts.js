let express = require('express');
let uniqid = require('uniqid');
let Post = require('../models/posts').Post;
let router = express.Router();
let authMiddleware = require('../middleware/auth');
router.get('/:id', async (req, res) => {
    let id = req.params.id;
    let post = await Post.findOne({ id: id });
    res.send(post);
})
//creating a route to get all the post
router.get('/', async (req, res) => {
    let posts = await Post.find();
    res.send(posts);
})
router.post('/', authMiddleware, async (req, res) => {
    let reqBody = req.body;
    let imgPath;
    if (reqBody.imageurl) {
        imgPath = reqBody.imageurl;
    } else {
        imgPath = req.file.path.substring(req.file.path.indexOf('\\'), req.file.path.length);
    }
    let post = new Post({
        id: uniqid(),
        name: reqBody.title,
        dateCreated: new Date(),
        country: reqBody.country,
        description: reqBody.description,
        text: reqBody.text,
        image: imgPath,
    })
    await post.save();
    // console.log(req.file)
    res.send('Post created')

});
router.delete('/:id', authMiddleware, async (req, res) => {
    let id = req.params.id;
    await Post.deleteOne({ id: id });
    res.send('post deleted');
});
router.put('/:id', async (req, res) => {
    let id = req.params.id;
    await Post.updateOne({ id: id }, req.body);
    res.send('updated post')
})
module.exports = router;