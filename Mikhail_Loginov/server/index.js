const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/react-blog');

const http = require('http');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const server = http.createServer(app);

const {BlogPost, User, Comment} = require('./models');

server.listen(3000, () => {
  console.log('Server has been started');
});

app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.get('/comments', async (req, res) => {
  const comments = await Comment.find();
  res.json(comments);
});

app.get('/blog-posts', async (req, res) => {
  const blogPosts = await BlogPost.find();
  res.json(blogPosts);
});

app.post('/comments', async (req, res) => {
  const comment = req.body;
  const count = await Comment.countDocuments();
  comment.id = String(count + 1);
  await Comment.create(comment);
  res.json(comment);
});

app.delete('/comments', async (req, res) => {
  await Comment.deleteOne({ id: String(req.body.id) }, err => {
    if (err) {
      console.log(err);
    }
  });
  res.send('OK');
});
