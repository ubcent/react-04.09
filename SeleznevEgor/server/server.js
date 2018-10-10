const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');

const userApi = require('./userApi');

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




function HandleError(error, message) {
    console.log(message);
    console.log(err);
}