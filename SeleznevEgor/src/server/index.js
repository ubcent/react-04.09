const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


/*Обработка запросов*/
/*Тестовый запрос*/
app.get('/', function (request, response) {
   console.log('hello world');
});
/*1. Запрос авторизации*/
app.post('/auth', function (req, res) {

    res.send(false);
});
/*2. Запрос статей*/
app.get('/getposts/:category/:numbers', function (req, res) {
    console.log(req.params);
    res.send('nothing');
});
/*3. Запрос определенной статьи*/
app.get('/getpost', function (req, res) {
    console.log(req.query);
    res.send('nothing to see')
});

/*4. Запрос последних n комментариев*/
app.get('/getLastComments/:numbers', function (req, res) {
    console.log(req.params);
    res.send('A lot of comments');
});
/*5. Запрос комментариев к статье*/
app.get('/getPostComments/:title/:numbers', function (req, res) {
    console.log(req.params);
    res.send('A lot of comments to the post')
});
/*6. Добавление комментария*/
app.post('/addComment', function (req, res) {
    console.log(req.body);
    res.send('added');
});
/*7. Запрос пользователя */
app.get('/getUser/:id', function (req, res) {
    console.log(req.params);
    res.send('username');
});
/*8. Запрос пользователей*/
app.get('/getUsers/:numbers', function (req, res) {
    console.log(req.params);
    res.send('a lot of Users');
});

app.listen(PORT, function () {
    console.log('server started');
});