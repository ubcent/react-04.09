const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');

const userApi = require('./userApi');
const postApi = require('./postApi');
const commentApi = require('./commentApi');

const app = express();

const PORT = 3050;
const DB_ADRESS = 'mongodb://localhost:27017/blog';
mongoose.connect(DB_ADRESS, {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: true}));


app.listen(PORT, ()=>{
    console.log('server started on ', PORT);
});

app.post('/auth',async (req, res)=>{
    const user = await userApi.AuthenticationUser(req.body);
    res.send(user) ;
});

app.get('/users/:numbers', async (req,res) =>{
    const users = await userApi.getUsers(req.params.numbers);
    res.send(users);
});

app.get('/user/:id', async (req, res) => {
    const user = await userApi.getUser(req.params.id);
    res.send(user);
});

app.get('/posts/:category/:number', async (req, res)=>{
    const posts = await postApi.getPosts(req.params.category, req.params.number);
    res.send(posts);
});

app.get('/post/:id/:comments', async (req, res) =>{
    const post = await postApi.getPost(req.params.id,req.params.comments );
    res.send(post);
});

app.get('/getLastComments/:numbers', async (req, res)=>{
   res.send(await commentApi.getLastComments(req.params.numbers));
});

app.post('addComment', async (req, res) =>{
    await commentApi.addComment(req.body);
    res.send ('OK');
});

function HandleError(error, message) {
    console.log(message);
    console.log(err);
}