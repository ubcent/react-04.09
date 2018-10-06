const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');
mongoose.connect('mongodb://admin:0vw75t@ds121413.mlab.com:21413/blogdb');

const http = require('http');

const app = express();
app.use(bodyParser.json());
app.use(cors());


const server = http.createServer(app);

server.listen(8000, () => {
    console.log('Server has been started');
});

const { User, Blog, Comment, Post } = require('./models');

app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

app.get('/comments', async (req, res) =>{
    await Comment
        .find()
        .populate('user', ['firstName', 'lastName'])
        .populate('post', 'title')
        .exec((err, comments) =>{
            res.json(comments);
        });
});

app.post('/comments', async(req, res) =>{

    let comment = new Comment({
        text: req.body.text,
        user: mongoose.Types.ObjectId(req.body.idUser),
        post: mongoose.Types.ObjectId(req.body.idPost)
    });

    comment =  await comment.save();

    await Comment
        .findById(comment._id)
        .populate('user', ['firstName', 'lastName'])
        .exec((err, comments) =>{
            res.json(comments);
        });
});

app.get('/posts', async(req, res) => {
    await Post
        .find({
            blog:{
                _id:`${req.query.blogId}`
            }
        })
        .exec((err, posts) =>{
            res.json(posts);
        })
});

app.get('/posts/:idPost', async (req, res) => {
    const posts = await Post.findById(req.params.idPost);
    res.send(posts);
});

app.get('/posts/:idPost/comments', async (req, res) => {

    await Comment
        .find({
            post:{
                _id:`${req.params.idPost}`
            }
        })
        .populate('user',['firstName', 'lastName'])
        .exec((err,comments) => {
            res.json(comments);
        });
});

app.get('/blogs', async (req, res) => {
    await Blog
        .find()
        .populate('user')
        .exec((err, blogs) =>{
            res.json(blogs);
        });
});

app.get('/blogs/:idBlog', async (req, res) => {
    const blogs = await Blog.findById(req.params.idBlog);
    res.send(blogs);
});



