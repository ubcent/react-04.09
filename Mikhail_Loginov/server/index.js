const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const http = require('http');

const { users, blogPosts, comments } = require('./api');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/users', users);
app.use('/blog-posts', blogPosts); 
app.use('/comments', comments);

const db = require('./config/keys.js').mongoURI;

mongoose.connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

const server = http.createServer(app);

const port = process.env.PORT || 3000;
 
server.listen(port, () => console.log(`Server started on port ${port}`));
