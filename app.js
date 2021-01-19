let express = require('express');
let app = express();
let mongoose = require('mongoose');
let multer = require('multer');
let postsRouter = require('./routes/posts');
let callbackRequestRouter = require('./routes/callback-requests');
let mailRouter = require('./routes/mails');
let userRouter = require('./routes/users');
let Post = require('./models/posts').Post;
let auth = require('./controllers/auth');
let cookieParser = require('cookie-parser');

app.use(express.json());

//using ejs as template engine tool
app.set('view engine', 'ejs');



let imageStorage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'public/images'),
    filename: (req, file, cb) => cb(null, file.originalname)
})

//rendering template ofr get request on sight
app.get('/sight', async (req, res) => {
    //finidng data using id from query paramater
    let id = req.query.id;
    let post = await Post.findOne({ id: id });
    res.render('sight', {
        name: post.name,
        image: post.image,
        dateCreated: post.dateCreated,
        text: post.text
    })
})

//let app use the multer extension, also specify the key that will be used
//to specify the key use single() function and inside the paranthesis mention the key 
app.use(multer({ storage: imageStorage }).single('imageFile'));

//connecting to db
mongoose.connect('mongodb://localhost/travels', { useNewUrlParser: true }).then(() => console.log('connected')).catch((error) => {
    return console.log(error);
});

app.use(express.static('public'));
app.use(cookieParser());
//creating a route for /admin request
app.get('/admin', (req, res) => {
    let token = req.cookies['auth_token'];
    if (token && auth.checkToken(token)) {
        res.render('admin');
    } else {
        res.redirect('/login')
    }
});
app.get('/login', (req, res) => {
    res.render('login')
})
//specify when user request the route check in routes folder and serve the route
app.use('/posts', postsRouter);
app.use('/callback-requests', callbackRequestRouter);
app.use('/mails', mailRouter);
app.use('/users', userRouter);



app.listen(3000, () => console.log('listening 3000...'));