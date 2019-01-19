const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');

const userApi = require('./userApi');
const postApi = require('./postApi');
const commentApi = require('./commentApi');
const categoryApi = require('./categoryApi');

const app = express();

const PORT = 3050;
const DB_ADRESS = 'mongodb://localhost:27017/blog';
mongoose.connect(DB_ADRESS, {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json);


app.listen(PORT, ()=>{
    console.log('server started on ', PORT);
});

app.post('/auth',async (req, res)=>{
    
    const user = await userApi.AuthenticationUser(req.body);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.send(user) ;
});

app.get('/users/:numbers', async (req,res) =>{
    const users = await userApi.getUsers(req.params.numbers);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.send(users);
});

app.get('/user/:id', async (req, res) => {
    const user = await userApi.getUser(req.params.id);
    res.send(user);
});

app.get('/posts/:category/:number', async (req, res)=>{
    console.log('try get post', req.params.category, req.params.number);
    const posts = await postApi.getPosts(req.params.category, req.params.number);
    console.log('sucses');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.send(posts);
});

app.get('/post/:id/:comments', async (req, res) =>{
    const post = await postApi.getPost(req.params.id,req.params.comments );
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.send(post);
});

app.get('/getLastComments/:numbers', async (req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
   res.send(await commentApi.getLastComments(req.params.numbers));
});
app.get('/getPostComments/:id/:numbers', async (req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
   res.send(await commentApi.getPostComments(req.params.id, req.params.numbers));
});

app.post('/addComment', async (req, res) =>{
    await commentApi.addComment(req.body);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.send ('OK');
});

app.get('/getCategories', async (req, res) =>{
    console.log('get cats');
    const categories = await categoryApi.getCategories();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.send (categories);
});

function HandleError(error, message) {
    console.log(message);
    console.log(err);
}